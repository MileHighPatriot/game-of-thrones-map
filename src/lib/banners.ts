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
  stark: { fill: '#c5ccd4', stroke: '#5a5f66' },
  lannister: { fill: '#9a1a16', stroke: '#e8c45a' },
  baratheon: { fill: '#c4a227', stroke: '#1a1a1a' },
  'baratheon-ds': { fill: '#d4b43c', stroke: '#b31b1b' },
  targaryen: { fill: '#1a0a0c', stroke: '#c41e3a' },
  greyjoy: { fill: '#121418', stroke: '#e0b24a' },
  tyrell: { fill: '#2f6b38', stroke: '#e8c45a' },
  martell: { fill: '#c45c18', stroke: '#e8c45a' },
  arryn: { fill: '#4f86c6', stroke: '#f4f6f8' },
  tully: { fill: '#2a5f9a', stroke: '#8b1d2c' },
  bolton: { fill: '#d9899c', stroke: '#9a1c1c' },
  frey: { fill: '#b8bcc2', stroke: '#2f5f9a' },
  nightswatch: { fill: '#111111', stroke: '#6a6a6a' },
  'free-folk': { fill: '#4a4034', stroke: '#cfc3a8' },
  'white-walkers': { fill: '#1a2f38', stroke: '#d7f2fb' },
  dothraki: { fill: '#a07c3a', stroke: '#3a2414' },
  masters: { fill: '#6a4a2a', stroke: '#e8d5a3' },
  braavos: { fill: '#2c4454', stroke: '#c9b896' },
  pentos: { fill: '#5d7348', stroke: '#efe4c8' },
  qarth: { fill: '#c9a227', stroke: '#2c1810' },
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
