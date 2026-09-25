const SIGIL_FILE: Record<string, string> = {
  stark: 'got/stark.png',
  lannister: 'got/lannister.png',
  baratheon: 'got/baratheon.png',
  'baratheon-ds': 'got/baratheon-ds.png',
  targaryen: 'got/targaryen.png',
  greyjoy: 'got/greyjoy.png',
  tyrell: 'got/tyrell.png',
  martell: 'got/martell.png',
  arryn: 'got/arryn.png',
  tully: 'got/tully.png',
  bolton: 'got/bolton.png',
  frey: 'got/frey.png',
  nightswatch: 'nightswatch.svg',
  'free-folk': 'free-folk.svg',
  'white-walkers': 'white-walkers.svg',
  dothraki: 'dothraki.svg',
  masters: 'masters.svg',
  braavos: 'braavos.svg',
  pentos: 'pentos.svg',
  qarth: 'qarth.svg',
  ruins: 'ruins.svg',
  baelish: 'got/baelish.png',
  faith: 'got/faith.png',
}

const paint: Record<string, { fill: string; stroke: string }> = {
  stark: { fill: '#e9e9e6', stroke: '#7f7f7f' },
  lannister: { fill: '#860a0a', stroke: '#c2ac7a' },
  baratheon: { fill: '#fecf03', stroke: '#0a0a0a' },
  'baratheon-ds': { fill: '#d3c5ab', stroke: '#b55a57' },
  targaryen: { fill: '#262626', stroke: '#c11f25' },
  greyjoy: { fill: '#1a1a1a', stroke: '#b49022' },
  tyrell: { fill: '#8da080', stroke: '#eebe3e' },
  martell: { fill: '#f0863a', stroke: '#80252a' },
  arryn: { fill: '#111a29', stroke: '#ded8c0' },
  tully: { fill: '#ae432f', stroke: '#212250' },
  bolton: { fill: '#141414', stroke: '#a82630' },
  frey: { fill: '#7d7d7d', stroke: '#19183a' },
  nightswatch: { fill: '#111111', stroke: '#6a6a6a' },
  'free-folk': { fill: '#5a4c3c', stroke: '#d4c6aa' },
  'white-walkers': { fill: '#163844', stroke: '#d7f2fb' },
  dothraki: { fill: '#b88830', stroke: '#3a2414' },
  masters: { fill: '#7a5428', stroke: '#e8d5a3' },
  braavos: { fill: '#2c4454', stroke: '#c9b896' },
  pentos: { fill: '#5d7348', stroke: '#efe4c8' },
  qarth: { fill: '#d4ae20', stroke: '#2c1810' },
  ruins: { fill: '#2a201c', stroke: '#c45c2a' },
  baelish: { fill: '#e7ba00', stroke: '#1b1600' },
  faith: { fill: '#d29943', stroke: '#91313b' },
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
