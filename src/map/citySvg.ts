import type { CityPalette, CitySpec } from '../data/cities.ts'
import { mulberry32, seedFrom } from '../lib/rng.ts'

const SIZE = 1000

function ring(cx: number, cy: number, rx: number, ry: number, count: number, rand: () => number, jitter: number) {
  const points: string[] = []
  for (let index = 0; index < count; index += 1) {
    const angle = (index / count) * Math.PI * 2
    const wobble = 1 + (rand() - 0.5) * jitter
    points.push(`${(cx + Math.cos(angle) * rx * wobble).toFixed(1)},${(cy + Math.sin(angle) * ry * wobble).toFixed(1)}`)
  }
  return points.join(' ')
}

function rect(x: number, y: number, w: number, h: number, fill: string, extra = '') {
  return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" fill="${fill}" ${extra}/>`
}

function poly(points: string, fill: string, extra = '') {
  return `<polygon points="${points}" fill="${fill}" ${extra}/>`
}

function ell(cx: number, cy: number, rx: number, ry: number, fill: string, extra = '') {
  return `<ellipse cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" fill="${fill}" ${extra}/>`
}

function localToSvg(lx: number, ly: number): [number, number] {
  return [(lx / 100) * SIZE, (1 - ly / 100) * SIZE]
}

function reserved(city: CitySpec): { x: number; y: number; r: number }[] {
  return city.landmarks.map((mark) => {
    const [x, y] = localToSvg(mark.lx, mark.ly)
    return { x, y, r: 70 }
  })
}

function hitsReserve(x: number, y: number, zones: { x: number; y: number; r: number }[]) {
  return zones.some((zone) => {
    const dx = x - zone.x
    const dy = y - zone.y
    return dx * dx + dy * dy < zone.r * zone.r
  })
}

function buildings(
  rand: () => number,
  palette: CityPalette,
  zones: { x: number; y: number; r: number }[],
  area: { x: number; y: number; w: number; h: number },
  count: number,
  scale = 1,
) {
  const parts: string[] = []
  let placed = 0
  let tries = 0
  while (placed < count && tries < count * 8) {
    tries += 1
    const w = (7 + rand() * 16) * scale
    const h = (7 + rand() * 14) * scale
    const x = area.x + rand() * Math.max(4, area.w - w)
    const y = area.y + rand() * Math.max(4, area.h - h)
    if (hitsReserve(x + w / 2, y + h / 2, zones)) continue
    const fill = rand() > 0.35 ? palette.roof : palette.roofAlt
    const angle = (rand() - 0.5) * 18
    parts.push(
      `<g transform="rotate(${angle.toFixed(1)} ${x + w / 2} ${y + h / 2})">${rect(x, y, w, h, fill, `stroke="${palette.earthDark}" stroke-width="0.6"`)}${rect(x + w * 0.15, y + h * 0.12, w * 0.22, h * 0.22, palette.earthDark)}</g>`,
    )
    placed += 1
  }
  return parts.join('')
}

function trees(rand: () => number, palette: CityPalette, cx: number, cy: number, rx: number, ry: number, count: number) {
  const parts: string[] = []
  for (let index = 0; index < count; index += 1) {
    const angle = rand() * Math.PI * 2
    const dist = rand()
    const x = cx + Math.cos(angle) * rx * dist
    const y = cy + Math.sin(angle) * ry * dist
    const r = 4 + rand() * 7
    parts.push(ell(x, y, r, r * 0.85, rand() > 0.5 ? palette.wood : '#2f3d28'))
  }
  return parts.join('')
}

function streets(rand: () => number, palette: CityPalette, vertical: number, horizontal: number, inset = 120) {
  const parts: string[] = []
  for (let index = 1; index <= vertical; index += 1) {
    const x = inset + ((SIZE - inset * 2) * index) / (vertical + 1) + (rand() - 0.5) * 18
    parts.push(
      `<path d="M${x.toFixed(1)} ${inset} C${(x + (rand() - 0.5) * 30).toFixed(1)} ${SIZE / 2} ${x.toFixed(1)} ${SIZE - inset}" fill="none" stroke="${palette.path}" stroke-width="${6 + rand() * 5}" stroke-linecap="round"/>`,
    )
  }
  for (let index = 1; index <= horizontal; index += 1) {
    const y = inset + ((SIZE - inset * 2) * index) / (horizontal + 1) + (rand() - 0.5) * 18
    parts.push(
      `<path d="M${inset} ${y.toFixed(1)} C${SIZE / 2} ${(y + (rand() - 0.5) * 24).toFixed(1)} ${SIZE - inset} ${y.toFixed(1)}" fill="none" stroke="${palette.path}" stroke-width="${5 + rand() * 4}" stroke-linecap="round"/>`,
    )
  }
  return parts.join('')
}

function landmarks(city: CitySpec) {
  const { palette } = city
  return city.landmarks
    .map((mark) => {
      const [x, y] = localToSvg(mark.lx, mark.ly)
      if (mark.siteId.includes('keep') || mark.siteId.includes('hall') || mark.siteId.includes('red-keep') || mark.siteId.includes('pyramid') || mark.siteId.includes('seal') || mark.siteId.includes('manse') || mark.siteId.includes('bank') || mark.siteId.includes('citadel') || mark.siteId.includes('sun') || mark.siteId.includes('table')) {
        return `${rect(x - 34, y - 28, 68, 54, palette.stone, `stroke="${palette.earthDark}" stroke-width="2"`)}${rect(x - 20, y - 48, 18, 22, palette.roof)}${rect(x + 6, y - 56, 14, 30, palette.roofAlt)}`
      }
      if (mark.siteId.includes('sept') || mark.siteId.includes('house') || mark.siteId.includes('horse')) {
        return `${ell(x, y, 32, 32, palette.roof)}${ell(x, y, 18, 18, palette.roofAlt)}`
      }
      if (mark.siteId.includes('docks') || mark.siteId.includes('harbor') || mark.siteId.includes('gate') || mark.siteId.includes('lion') || mark.siteId.includes('bridge') || mark.siteId.includes('wall') && !mark.siteId.includes('walls')) {
        return `${rect(x - 40, y - 10, 80, 18, palette.stone, `stroke="${palette.earthDark}" stroke-width="1.4"`)}${rect(x - 28, y - 4, 12, 28, palette.wall)}${rect(x + 16, y - 4, 12, 28, palette.wall)}`
      }
      if (mark.siteId.includes('woods') || mark.siteId.includes('gardens')) {
        return `${ell(x, y, 48, 40, palette.wood)}${ell(x - 10, y + 4, 14, 12, '#2a3824')}${ell(x + 12, y - 6, 12, 10, '#334628')}`
      }
      if (mark.siteId.includes('tower') || mark.siteId.includes('spear') || mark.siteId.includes('elevator') || mark.siteId.includes('sky')) {
        return `${rect(x - 10, y - 40, 20, 64, palette.stone, `stroke="${palette.earthDark}" stroke-width="1.5"`)}${rect(x - 7, y - 54, 14, 16, palette.roof)}`
      }
      if (mark.siteId.includes('pit') || mark.siteId.includes('dragonpit') || mark.siteId.includes('ruin') || mark.siteId.includes('undying') || mark.siteId.includes('kingspyre') || mark.siteId.includes('crypts')) {
        return `${ell(x, y, 36, 28, palette.earthDark)}${ell(x, y, 22, 16, palette.roofAlt)}`
      }
      if (mark.siteId.includes('titan')) {
        return `${rect(x - 16, y - 50, 12, 70, palette.stone)}${rect(x + 4, y - 50, 12, 70, palette.stone)}${rect(x - 22, y - 62, 44, 16, palette.wall)}`
      }
      if (mark.siteId.includes('yard')) {
        return `${rect(x - 36, y - 24, 72, 48, palette.path, `stroke="${palette.earthDark}" stroke-width="1.2"`)}`
      }
      if (mark.siteId.includes('flea')) {
        return `${rect(x - 30, y - 22, 18, 16, palette.roofAlt)}${rect(x - 8, y - 18, 14, 20, palette.roof)}${rect(x + 10, y - 14, 16, 14, palette.roofAlt)}`
      }
      if (mark.siteId.includes('walls')) {
        return `<path d="M${x - 50} ${y} L${x + 50} ${y}" fill="none" stroke="${palette.wall}" stroke-width="10"/>`
      }
      if (mark.siteId.includes('moon')) {
        return `${ell(x, y, 16, 16, '#1a120a')}${ell(x, y, 22, 22, 'none', `stroke="${palette.stone}" stroke-width="4"`)}`
      }
      return rect(x - 16, y - 16, 32, 32, palette.stone)
    })
    .join('')
}

function mottledEarth(palette: CityPalette, rand: () => number) {
  const parts = [rect(0, 0, SIZE, SIZE, palette.earth)]
  for (let index = 0; index < 28; index += 1) {
    parts.push(
      ell(rand() * SIZE, rand() * SIZE, 40 + rand() * 90, 30 + rand() * 70, rand() > 0.5 ? palette.earthDark : palette.path, 'opacity="0.22"'),
    )
  }
  return parts.join('')
}

function themeGround(city: CitySpec, rand: () => number) {
  const { palette, theme } = city
  const parts: string[] = [mottledEarth(palette, rand)]

  if (theme === 'harbor-city' || theme === 'canal-city' || theme === 'sea-stacks') {
    parts.push(rect(0, 720, SIZE, 280, palette.water))
    parts.push(`<path d="M0 720 C200 690 400 760 600 720 C780 690 900 740 1000 710 L1000 1000 L0 1000 Z" fill="${palette.water}"/>`)
    for (let index = 0; index < 8; index += 1) {
      const x = 80 + index * 110
      parts.push(rect(x, 700, 10, 70, palette.stone))
    }
  }

  if (theme === 'canal-city') {
    parts.push(`<path d="M80 200 C200 260 220 500 180 820" fill="none" stroke="${palette.water}" stroke-width="36"/>`)
    parts.push(`<path d="M200 180 C480 220 520 480 860 520" fill="none" stroke="${palette.water}" stroke-width="28"/>`)
    parts.push(`<path d="M420 120 C500 400 620 620 900 780" fill="none" stroke="${palette.water}" stroke-width="22"/>`)
  }

  if (theme === 'river-castle' || theme === 'bridge-castle') {
    parts.push(`<path d="M0 620 C240 580 420 700 1000 640 L1000 1000 L0 1000 Z" fill="${palette.water}"/>`)
    if (theme === 'bridge-castle') {
      parts.push(rect(120, 430, 760, 36, palette.stone, `stroke="${palette.earthDark}" stroke-width="2"`))
    }
  }

  if (theme === 'garden-castle' || theme === 'steppe') {
    parts.push(ell(320, 560, 220, 180, palette.wood))
    parts.push(ell(700, 380, 180, 150, '#4a5e34'))
    parts.push(trees(rand, palette, 320, 560, 200, 160, 40))
  }

  if (theme === 'volcanic') {
    parts.push(ell(720, 280, 210, 180, palette.earthDark))
    parts.push(ell(720, 270, 70, 58, '#3a2018'))
    parts.push(ell(200, 780, 260, 90, palette.water))
  }

  if (theme === 'mountain-castle') {
    parts.push(poly('80,900 280,220 460,900', palette.earthDark))
    parts.push(poly('300,900 520,140 780,900', palette.stone))
    parts.push(poly('500,900 720,260 980,900', palette.earthDark))
  }

  if (theme === 'pyramid-city') {
    parts.push(poly('280,720 500,220 720,720', palette.stone))
    parts.push(poly('340,720 500,300 660,720', palette.roof))
    parts.push(poly('400,720 500,380 600,720', palette.roofAlt))
  }

  if (theme === 'wall-fort') {
    parts.push(rect(0, 40, SIZE, 70, '#e8f0f4'))
    parts.push(rect(0, 70, SIZE, 18, '#cfd8de'))
  }

  if (theme === 'ruin') {
    parts.push(ell(520, 420, 280, 220, palette.earthDark))
  }

  if (theme === 'triple-wall') {
    parts.push(`<ellipse cx="500" cy="500" rx="430" ry="390" fill="none" stroke="${palette.wall}" stroke-width="18"/>`)
    parts.push(`<ellipse cx="500" cy="500" rx="360" ry="320" fill="none" stroke="${palette.stone}" stroke-width="14"/>`)
    parts.push(`<ellipse cx="500" cy="500" rx="290" ry="250" fill="none" stroke="${palette.roofAlt}" stroke-width="12"/>`)
  }

  if (theme === 'round-castle') {
    parts.push(`<ellipse cx="500" cy="500" rx="280" ry="260" fill="none" stroke="${palette.wall}" stroke-width="28"/>`)
  }

  if (theme === 'sea-stacks') {
    parts.push(ell(280, 420, 90, 70, palette.stone))
    parts.push(ell(500, 480, 80, 64, palette.earthDark))
    parts.push(ell(700, 400, 74, 58, palette.stone))
    parts.push(rect(360, 450, 140, 10, palette.path))
    parts.push(rect(560, 430, 120, 10, palette.path))
  }

  return parts.join('')
}

function walls(city: CitySpec, rand: () => number) {
  const { theme, palette } = city
  if (theme === 'canal-city' || theme === 'steppe' || theme === 'sea-stacks' || theme === 'wall-fort') return ''
  if (theme === 'triple-wall' || theme === 'round-castle') return ''
  const cx = 500
  const cy = theme === 'harbor-city' ? 430 : 480
  const rx = theme === 'castle' || theme === 'river-castle' ? 310 : 380
  const ry = theme === 'castle' ? 290 : 320
  return `<polygon points="${ring(cx, cy, rx, ry, 18, rand, 0.08)}" fill="none" stroke="${palette.wall}" stroke-width="16" stroke-linejoin="round"/>`
}

export function citySvg(city: CitySpec): string {
  const rand = mulberry32(seedFrom(city.id))
  const zones = reserved(city)
  const { palette, theme } = city
  const fillCount = theme === 'walled-city' || theme === 'harbor-city' || theme === 'canal-city' ? 260 : 140
  const area =
    theme === 'harbor-city'
      ? { x: 90, y: 90, w: 820, h: 600 }
      : { x: 120, y: 120, w: 760, h: 760 }
  const blob = ring(500, theme === 'harbor-city' ? 440 : 500, 430, theme === 'harbor-city' ? 400 : 410, 24, rand, 0.1)

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}" width="4096" height="4096">
  <defs>
    <clipPath id="${city.id}-clip">
      <polygon points="${blob}"/>
    </clipPath>
    <filter id="${city.id}-soft">
      <feDropShadow dx="0" dy="1.2" stdDeviation="1.4" flood-color="#1a120a" flood-opacity="0.35"/>
    </filter>
    <radialGradient id="${city.id}-shade" cx="42%" cy="38%" r="70%">
      <stop offset="0%" stop-color="#efe4c8" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#1a120a" stop-opacity="0.22"/>
    </radialGradient>
    <pattern id="${city.id}-grain" width="8" height="8" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="2" r="0.6" fill="#1a120a" opacity="0.14"/>
      <circle cx="5" cy="6" r="0.5" fill="#efe4c8" opacity="0.1"/>
    </pattern>
  </defs>
  <g clip-path="url(#${city.id}-clip)">
    ${themeGround(city, rand)}
    ${streets(rand, palette, 6, 5, theme === 'castle' ? 180 : 110)}
    ${walls(city, rand)}
    <g filter="url(#${city.id}-soft)">
      ${buildings(rand, palette, zones, area, fillCount, theme === 'castle' ? 1.15 : 1)}
      ${landmarks(city)}
    </g>
    ${theme === 'castle' || theme === 'garden-castle' ? trees(rand, palette, 280, 520, 90, 80, 18) : ''}
    ${trees(rand, palette, 160, 200, 70, 50, 10)}
    <rect width="${SIZE}" height="${SIZE}" fill="url(#${city.id}-grain)"/>
    <rect width="${SIZE}" height="${SIZE}" fill="url(#${city.id}-shade)"/>
  </g>
</svg>`
}
