const SIGIL_FILE: Record<string, string> = {
  stark: 'stark.png',
  lannister: 'lannister.svg',
  baratheon: 'baratheon.svg',
  'baratheon-ds': 'baratheon-ds.svg',
  targaryen: 'targaryen.png',
  greyjoy: 'greyjoy.svg',
  tyrell: 'tyrell.svg',
  martell: 'martell.svg',
  arryn: 'arryn.svg',
  tully: 'tully.png',
  bolton: 'bolton.png',
  frey: 'frey.png',
  nightswatch: 'nightswatch.svg',
  'free-folk': 'free-folk.svg',
  'white-walkers': 'white-walkers.svg',
  dothraki: 'dothraki.svg',
  masters: 'masters.svg',
  braavos: 'braavos.svg',
  pentos: 'pentos.svg',
  qarth: 'qarth.svg',
  ruins: 'ruins.svg',
  baelish: 'baelish.png',
  faith: 'faith.svg',
}

const paint: Record<string, { fill: string; stroke: string }> = {
  stark: { fill: '#b7c4d2', stroke: '#3d4650' },
  lannister: { fill: '#c41212', stroke: '#f0d060' },
  baratheon: { fill: '#d4a61e', stroke: '#1a1a1a' },
  'baratheon-ds': { fill: '#e0b830', stroke: '#b31b1b' },
  targaryen: { fill: '#2a0508', stroke: '#e02440' },
  greyjoy: { fill: '#0e1014', stroke: '#e8c056' },
  tyrell: { fill: '#2a7a34', stroke: '#f0d060' },
  martell: { fill: '#d85a12', stroke: '#f0d060' },
  arryn: { fill: '#3f8ee0', stroke: '#f4f6f8' },
  tully: { fill: '#1f6bb8', stroke: '#9a1c2c' },
  bolton: { fill: '#e07088', stroke: '#8a1010' },
  frey: { fill: '#c4c8ce', stroke: '#245a9a' },
  nightswatch: { fill: '#111111', stroke: '#6a6a6a' },
  'free-folk': { fill: '#5a4c3c', stroke: '#d4c6aa' },
  'white-walkers': { fill: '#163844', stroke: '#d7f2fb' },
  dothraki: { fill: '#b88830', stroke: '#3a2414' },
  masters: { fill: '#7a5428', stroke: '#e8d5a3' },
  braavos: { fill: '#2c4454', stroke: '#c9b896' },
  pentos: { fill: '#5d7348', stroke: '#efe4c8' },
  qarth: { fill: '#d4ae20', stroke: '#2c1810' },
  ruins: { fill: '#2a201c', stroke: '#c45c2a' },
  baelish: { fill: '#2f6b3a', stroke: '#dfe3e8' },
  faith: { fill: '#e8e0cc', stroke: '#c9a227' },
}

export function sigilSrc(houseId: string): string {
  const file = SIGIL_FILE[houseId] ?? 'unknown.svg'
  return `${import.meta.env.BASE_URL}sigils/${file}`
}

export function bannerSvg(houseId: string): string {
  return `<img src="${sigilSrc(houseId)}" class="house-banner" alt="" />`
}

export function regionPaint(houseId: string | undefined): { fill: string; stroke: string } {
  if (!houseId) return { fill: '#8a7a62', stroke: '#4a3a28' }
  return paint[houseId] ?? { fill: '#8a7a62', stroke: '#4a3a28' }
}
