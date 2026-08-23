const svg = (body: string, bg: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 48" class="house-banner" aria-hidden="true">
    <path d="M4 2h32v34l-16 10L4 36Z" fill="${bg}" stroke="#1a120a" stroke-width="1.6"/>
    ${body}
  </svg>`

const art: Record<string, string> = {
  stark: svg(
    '<path d="M8 30c2-8 6-12 12-16 2-3 6-4 8-1 3 2 5 6 4 10-1 4-4 8-8 9l-4 3-4-3c-4-1-8-4-8-8z" fill="#1c2430"/><path d="M14 22h2M22 20h2" stroke="#c5cdd6" stroke-width="1.4"/>',
    '#c5cdd6',
  ),
  lannister: svg(
    '<circle cx="20" cy="20" r="7.5" fill="#f0d38a"/><path d="M12 18c2-6 6-8 8-8s6 2 8 8M14 26c4 6 8 6 12 0" stroke="#7a1d12" stroke-width="1.6" fill="none"/><path d="M20 14v14M15 20h10" stroke="#7a1d12" stroke-width="1.5"/>',
    '#c23b22',
  ),
  baratheon: svg(
    '<path d="M20 14c-2 0-6 4-7 8 3 1 5 1 7 1s4 0 7-1c-1-4-5-8-7-8z" fill="#1a1a1a"/><path d="M13 14l-3-6M16 12l-1-7M20 12v-8M24 12l1-7M27 14l3-6" stroke="#1a1a1a" stroke-width="1.5"/><path d="M13 30c4-8 10-8 14 0" fill="none" stroke="#1a1a1a" stroke-width="1.8"/>',
    '#d4b43c',
  ),
  'baratheon-ds': svg(
    '<path d="M20 12l5 8h-10z" fill="#c23b22"/><path d="M16 22h8v10h-8z" fill="#c23b22"/><path d="M20 12v20" stroke="#7a1d12" stroke-width="1"/>',
    '#f4f0e4',
  ),
  targaryen: svg(
    '<path d="M20 13c7 5 10 12 0 21C10 25 13 18 20 13z" fill="#d4b43c"/><path d="M11 20c4 2 6 6 9 10M29 20c-4 2-6 6-9 10" fill="none" stroke="#d4b43c" stroke-width="1.6"/><circle cx="16" cy="20" r="1.3" fill="#7b1113"/><circle cx="24" cy="20" r="1.3" fill="#7b1113"/><circle cx="20" cy="26" r="1.3" fill="#7b1113"/>',
    '#7b1113',
  ),
  greyjoy: svg(
    '<circle cx="20" cy="17" r="4.2" fill="#c9a36a"/><path d="M12 19q-5 12-4 18M16 21q-3 14-1 19M20 21v19M24 21q3 14 1 19M28 19q5 12 4 18" fill="none" stroke="#c9a36a" stroke-width="1.8" stroke-linecap="round"/>',
    '#2b2f36',
  ),
  tyrell: svg(
    '<circle cx="20" cy="22" r="9" fill="#f2d37a"/><circle cx="20" cy="22" r="3.2" fill="#3f7a46"/><path d="M20 13v4M20 27v4M11 22h4M25 22h4M14 15l3 3M23 26l3 3M26 15l-3 3M17 26l-3 3" stroke="#3f7a46" stroke-width="1.3"/>',
    '#3f7a46',
  ),
  martell: svg(
    '<circle cx="22" cy="20" r="8" fill="#f3e6c5"/><path d="M22 12v16M14 20h16M16 14l12 12M28 14L16 26" stroke="#d36b1f" stroke-width="1.1"/><path d="M8 32 L30 12" stroke="#7a1d12" stroke-width="2.2"/><circle cx="30" cy="12" r="2" fill="#7a1d12"/>',
    '#d36b1f',
  ),
  arryn: svg(
    '<circle cx="20" cy="16" r="5.5" fill="#f4f0e8"/><path d="M12 30c3-10 6-14 8-16 2 2 5 6 8 16H12z" fill="#f4f0e8"/><circle cx="20" cy="16" r="2" fill="#6f8fbf"/>',
    '#6f8fbf',
  ),
  tully: svg(
    '<path d="M8 24c6-10 10-12 16-8 4 2 8 2 10 0-2 8-8 14-16 14-6 0-10-3-10-6z" fill="#d6d6d6"/><path d="M24 18c2 0 4-2 5-4" stroke="#1f6b4a" stroke-width="1.4" fill="none"/>',
    '#1f6b4a',
  ),
  bolton: svg(
    '<path d="M16 12h8l2 10-6 14-6-14z" fill="#8b1e1e"/><path d="M14 22h12M18 16v8M22 16v8" stroke="#f2f2f0" stroke-width="1.2"/>',
    '#f2f2f0',
  ),
  frey: svg(
    '<path d="M11 16h7v16h-7zM22 16h7v16h-7z" fill="#e8d9b8"/><path d="M11 22h18" stroke="#6b4a2b" stroke-width="1.6"/><path d="M14 16v-4h8v4" fill="#e8d9b8"/>',
    '#6b4a2b',
  ),
  nightswatch: svg(
    '<path d="M20 12v22M12 20h16" stroke="#b0b0b0" stroke-width="2"/><path d="M14 28h12" stroke="#b0b0b0" stroke-width="1.4"/>',
    '#1b1b1b',
  ),
  'free-folk': svg(
    '<path d="M12 32 L20 12 L28 32Z" fill="#d8c7a4"/><path d="M20 12v20" stroke="#3a2a14" stroke-width="1.4"/>',
    '#5c6b58',
  ),
  'white-walkers': svg(
    '<circle cx="20" cy="22" r="8" fill="#e8f6fb"/><path d="M16 20h8M20 16v8M15 16l10 12M25 16L15 28" stroke="#1a2a33" stroke-width="1.3"/>',
    '#9fd4e6',
  ),
  dothraki: svg(
    '<path d="M10 28c4-10 8-14 14-12 4 1 8 4 8 8-6 2-10 2-16 0z" fill="#3a2a14"/><circle cx="18" cy="18" r="2.4" fill="#3a2a14"/><path d="M28 24c4 2 6 6 4 8" stroke="#3a2a14" stroke-width="1.5" fill="none"/>',
    '#c4a35a',
  ),
  masters: svg(
    '<path d="M10 32 V18 L20 10 L30 18 V32Z" fill="#e8d5a3"/><path d="M16 32v-8h8v8" fill="#8a6a3a"/>',
    '#8a6a3a',
  ),
  braavos: svg(
    '<path d="M14 32 V16 h12 v16M14 16 l6-8 6 8" fill="none" stroke="#c9b896" stroke-width="2"/><path d="M12 32h16" stroke="#c9b896" stroke-width="1.5"/>',
    '#3d5a6c',
  ),
  pentos: svg(
    '<rect x="12" y="16" width="16" height="14" fill="#efe4c8"/><path d="M12 16l8-6 8 6" fill="#efe4c8"/>',
    '#7a8f5a',
  ),
  qarth: svg(
    '<circle cx="20" cy="22" r="9" fill="none" stroke="#2c1810" stroke-width="2"/><circle cx="20" cy="22" r="5" fill="none" stroke="#2c1810" stroke-width="1.4"/><circle cx="20" cy="22" r="2" fill="#2c1810"/>',
    '#b8860b',
  ),
  ruins: svg(
    '<path d="M10 32 L15 14 L20 26 L25 12 L30 32" fill="none" stroke="#c45c2a" stroke-width="2"/><path d="M10 32h20" stroke="#c45c2a" stroke-width="1.5"/>',
    '#3a3330',
  ),
  baelish: svg(
    '<path d="M10 26c4-12 8-14 16-14M12 22h16" fill="none" stroke="#c5b48a" stroke-width="2"/><circle cx="20" cy="16" r="2.4" fill="#c5b48a"/>',
    '#6a6e76',
  ),
  faith: svg(
    '<path d="M20 11v22M13 18h14M16 30h8" stroke="#6b4a28" stroke-width="1.8"/><circle cx="20" cy="13" r="2.2" fill="#6b4a28"/>',
    '#efe6d0',
  ),
}

const paint: Record<string, { fill: string; stroke: string }> = {
  stark: { fill: '#5b6b7c', stroke: '#d5dde6' },
  lannister: { fill: '#a01f16', stroke: '#f0d38a' },
  baratheon: { fill: '#c4a227', stroke: '#1a1a1a' },
  'baratheon-ds': { fill: '#7a1410', stroke: '#f4f0e4' },
  targaryen: { fill: '#5c0d10', stroke: '#d4b43c' },
  greyjoy: { fill: '#1c2026', stroke: '#c9a36a' },
  tyrell: { fill: '#2c5a34', stroke: '#f2d37a' },
  martell: { fill: '#b45310', stroke: '#f3e6c5' },
  arryn: { fill: '#45639a', stroke: '#f4f0e8' },
  tully: { fill: '#15543b', stroke: '#d6d6d6' },
  bolton: { fill: '#7a1418', stroke: '#f2f2f0' },
  frey: { fill: '#5a3b22', stroke: '#e8d9b8' },
  nightswatch: { fill: '#161616', stroke: '#b0b0b0' },
  'free-folk': { fill: '#465245', stroke: '#d8c7a4' },
  'white-walkers': { fill: '#5e8fa0', stroke: '#e8f6fb' },
  dothraki: { fill: '#8a682c', stroke: '#efe4c8' },
  masters: { fill: '#6a5030', stroke: '#e8d5a3' },
  braavos: { fill: '#2c4a5a', stroke: '#c9b896' },
  pentos: { fill: '#556a3c', stroke: '#efe4c8' },
  qarth: { fill: '#8a650a', stroke: '#2c1810' },
  ruins: { fill: '#3a2c26', stroke: '#c45c2a' },
  baelish: { fill: '#4e535c', stroke: '#c5b48a' },
  faith: { fill: '#cfc3a4', stroke: '#6b4a28' },
}

export function bannerSvg(houseId: string): string {
  return art[houseId] ?? svg('<circle cx="20" cy="22" r="6" fill="#efe4c8"/>', '#6b5344')
}

export function regionPaint(houseId: string | undefined): { fill: string; stroke: string } {
  if (!houseId) return { fill: '#8a7a62', stroke: '#4a3a28' }
  return paint[houseId] ?? { fill: '#8a7a62', stroke: '#4a3a28' }
}
