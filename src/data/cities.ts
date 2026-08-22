export type CityTheme =
  | 'walled-city'
  | 'harbor-city'
  | 'castle'
  | 'wall-fort'
  | 'canal-city'
  | 'mountain-castle'
  | 'volcanic'
  | 'garden-castle'
  | 'river-castle'
  | 'ruin'
  | 'bridge-castle'
  | 'sea-stacks'
  | 'pyramid-city'
  | 'steppe'
  | 'triple-wall'
  | 'round-castle'

export type CityPalette = {
  earth: string
  earthDark: string
  roof: string
  roofAlt: string
  stone: string
  wall: string
  water: string
  wood: string
  path: string
}

export type CityLandmark = {
  siteId: string
  lx: number
  ly: number
}

export type CitySpec = {
  id: string
  locationId: string
  theme: CityTheme
  cx: number
  cy: number
  w: number
  h: number
  palette: CityPalette
  landmarks: CityLandmark[]
}

const kl: CityPalette = {
  earth: '#7a6a4c',
  earthDark: '#5c4e38',
  roof: '#8b3a2a',
  roofAlt: '#6e3a28',
  stone: '#9a8b74',
  wall: '#6d6254',
  water: '#3d5c6e',
  wood: '#4a5a38',
  path: '#c4a574',
}

const north: CityPalette = {
  earth: '#6b6a5c',
  earthDark: '#4d4c42',
  roof: '#4a4540',
  roofAlt: '#5c5348',
  stone: '#8a8680',
  wall: '#6a6660',
  water: '#4a5c62',
  wood: '#3d4a32',
  path: '#b7a888',
}

const sea: CityPalette = {
  earth: '#7a7058',
  earthDark: '#5a5340',
  roof: '#7a4032',
  roofAlt: '#5c3a30',
  stone: '#8e8778',
  wall: '#5e584c',
  water: '#2f5264',
  wood: '#445438',
  path: '#c2ae86',
}

const gold: CityPalette = {
  earth: '#8a7a52',
  earthDark: '#6a5a3c',
  roof: '#8a5a28',
  roofAlt: '#6e4820',
  stone: '#c4b48a',
  wall: '#8a7a58',
  water: '#3a5a68',
  wood: '#4a5c34',
  path: '#d4c090',
}

const dornish: CityPalette = {
  earth: '#c4a06a',
  earthDark: '#9a7848',
  roof: '#d8b878',
  roofAlt: '#c49a58',
  stone: '#e8d2a8',
  wall: '#c4b088',
  water: '#3d7a86',
  wood: '#5a6a3c',
  path: '#e8d4a4',
}

const slaver: CityPalette = {
  earth: '#b89262',
  earthDark: '#8a6a44',
  roof: '#c45a3a',
  roofAlt: '#8a4030',
  stone: '#d8c49a',
  wall: '#a89068',
  water: '#2f6a78',
  wood: '#4a5a30',
  path: '#e0c890',
}

const vale: CityPalette = {
  earth: '#7a7a68',
  earthDark: '#545448',
  roof: '#8a8e92',
  roofAlt: '#6a6e72',
  stone: '#c8ccd0',
  wall: '#9aa0a4',
  water: '#4a6880',
  wood: '#3a4a34',
  path: '#d0c8b0',
}

export const citySpecs: CitySpec[] = [
  {
    id: 'city-kings-landing',
    locationId: 'kings-landing',
    theme: 'harbor-city',
    cx: 502,
    cy: 348,
    w: 52,
    h: 46,
    palette: kl,
    landmarks: [
      { siteId: 'kl-red-keep', lx: 78, ly: 62 },
      { siteId: 'kl-sept', lx: 38, ly: 58 },
      { siteId: 'kl-flea', lx: 32, ly: 38 },
      { siteId: 'kl-dragonpit', lx: 70, ly: 78 },
      { siteId: 'kl-docks', lx: 28, ly: 18 },
    ],
  },
  {
    id: 'city-winterfell',
    locationId: 'winterfell',
    theme: 'castle',
    cx: 310,
    cy: 599,
    w: 42,
    h: 38,
    palette: north,
    landmarks: [
      { siteId: 'wf-keep', lx: 62, ly: 58 },
      { siteId: 'wf-godswood', lx: 28, ly: 48 },
      { siteId: 'wf-crypts', lx: 70, ly: 32 },
      { siteId: 'wf-broken-tower', lx: 80, ly: 70 },
      { siteId: 'wf-yard', lx: 48, ly: 62 },
    ],
  },
  {
    id: 'city-castle-black',
    locationId: 'castle-black',
    theme: 'wall-fort',
    cx: 352,
    cy: 708,
    w: 28,
    h: 24,
    palette: north,
    landmarks: [
      { siteId: 'cb-yard', lx: 50, ly: 42 },
      { siteId: 'cb-elevator', lx: 58, ly: 78 },
      { siteId: 'cb-mole', lx: 28, ly: 18 },
    ],
  },
  {
    id: 'city-dragonstone',
    locationId: 'dragonstone',
    theme: 'volcanic',
    cx: 581,
    cy: 374,
    w: 28,
    h: 26,
    palette: kl,
    landmarks: [
      { siteId: 'ds-table', lx: 48, ly: 52 },
      { siteId: 'ds-dragonmont', lx: 72, ly: 70 },
    ],
  },
  {
    id: 'city-eyrie',
    locationId: 'the-eyrie',
    theme: 'mountain-castle',
    cx: 540,
    cy: 520,
    w: 24,
    h: 28,
    palette: vale,
    landmarks: [
      { siteId: 'eyrie-moon', lx: 55, ly: 62 },
      { siteId: 'eyrie-sky', lx: 38, ly: 40 },
    ],
  },
  {
    id: 'city-riverrun',
    locationId: 'riverrun',
    theme: 'river-castle',
    cx: 304,
    cy: 471,
    w: 28,
    h: 26,
    palette: north,
    landmarks: [
      { siteId: 'rr-godswood', lx: 32, ly: 48 },
      { siteId: 'rr-gate', lx: 62, ly: 38 },
    ],
  },
  {
    id: 'city-casterly',
    locationId: 'casterly-rock',
    theme: 'mountain-castle',
    cx: 165,
    cy: 462,
    w: 30,
    h: 32,
    palette: gold,
    landmarks: [
      { siteId: 'cr-hall', lx: 58, ly: 62 },
      { siteId: 'cr-lion', lx: 40, ly: 28 },
    ],
  },
  {
    id: 'city-highgarden',
    locationId: 'highgarden',
    theme: 'garden-castle',
    cx: 290,
    cy: 295,
    w: 34,
    h: 30,
    palette: {
      earth: '#6a7a48',
      earthDark: '#4a5a32',
      roof: '#8a4038',
      roofAlt: '#6a3028',
      stone: '#d4c4a0',
      wall: '#8a9a58',
      water: '#3a6a68',
      wood: '#3a5a30',
      path: '#d8c898',
    },
    landmarks: [
      { siteId: 'hg-gardens', lx: 38, ly: 42 },
      { siteId: 'hg-hall', lx: 60, ly: 58 },
    ],
  },
  {
    id: 'city-sunspear',
    locationId: 'sunspear',
    theme: 'walled-city',
    cx: 550,
    cy: 120,
    w: 30,
    h: 28,
    palette: dornish,
    landmarks: [
      { siteId: 'ss-spear', lx: 68, ly: 62 },
      { siteId: 'ss-sun', lx: 48, ly: 48 },
    ],
  },
  {
    id: 'city-braavos',
    locationId: 'braavos',
    theme: 'canal-city',
    cx: 831,
    cy: 726,
    w: 42,
    h: 36,
    palette: sea,
    landmarks: [
      { siteId: 'br-titan', lx: 18, ly: 48 },
      { siteId: 'br-house', lx: 62, ly: 40 },
      { siteId: 'br-bank', lx: 48, ly: 62 },
    ],
  },
  {
    id: 'city-meereen',
    locationId: 'meereen',
    theme: 'pyramid-city',
    cx: 1262,
    cy: 287,
    w: 38,
    h: 34,
    palette: slaver,
    landmarks: [
      { siteId: 'md-pyramid', lx: 55, ly: 58 },
      { siteId: 'md-pit', lx: 32, ly: 36 },
    ],
  },
  {
    id: 'city-vaes',
    locationId: 'vaes-dothrak',
    theme: 'steppe',
    cx: 1148,
    cy: 572,
    w: 38,
    h: 30,
    palette: slaver,
    landmarks: [{ siteId: 'vd-horse', lx: 50, ly: 52 }],
  },
  {
    id: 'city-oldtown',
    locationId: 'oldtown',
    theme: 'harbor-city',
    cx: 175,
    cy: 216,
    w: 34,
    h: 30,
    palette: gold,
    landmarks: [
      { siteId: 'ot-tower', lx: 32, ly: 70 },
      { siteId: 'ot-citadel', lx: 58, ly: 42 },
    ],
  },
  {
    id: 'city-storms-end',
    locationId: 'storms-end',
    theme: 'round-castle',
    cx: 529,
    cy: 283,
    w: 26,
    h: 24,
    palette: north,
    landmarks: [
      { siteId: 'se-wall', lx: 42, ly: 40 },
      { siteId: 'se-yard', lx: 55, ly: 58 },
    ],
  },
  {
    id: 'city-pyke',
    locationId: 'pyke',
    theme: 'sea-stacks',
    cx: 94,
    cy: 550,
    w: 26,
    h: 24,
    palette: sea,
    landmarks: [
      { siteId: 'pyke-sea', lx: 32, ly: 62 },
      { siteId: 'pyke-bridge', lx: 58, ly: 48 },
    ],
  },
  {
    id: 'city-harrenhal',
    locationId: 'harrenhal',
    theme: 'ruin',
    cx: 394,
    cy: 436,
    w: 36,
    h: 32,
    palette: north,
    landmarks: [
      { siteId: 'hh-kingspyre', lx: 62, ly: 60 },
      { siteId: 'hh-godswood', lx: 30, ly: 40 },
    ],
  },
  {
    id: 'city-twins',
    locationId: 'the-twins',
    theme: 'bridge-castle',
    cx: 342,
    cy: 512,
    w: 30,
    h: 20,
    palette: north,
    landmarks: [
      { siteId: 'tw-bridge', lx: 50, ly: 50 },
      { siteId: 'tw-east', lx: 78, ly: 55 },
    ],
  },
  {
    id: 'city-white-harbor',
    locationId: 'white-harbor',
    theme: 'harbor-city',
    cx: 498,
    cy: 524,
    w: 30,
    h: 26,
    palette: vale,
    landmarks: [
      { siteId: 'wh-seal', lx: 58, ly: 62 },
      { siteId: 'wh-docks', lx: 38, ly: 28 },
    ],
  },
  {
    id: 'city-pentos',
    locationId: 'pentos',
    theme: 'harbor-city',
    cx: 821,
    cy: 555,
    w: 34,
    h: 30,
    palette: sea,
    landmarks: [
      { siteId: 'pe-manse', lx: 60, ly: 58 },
      { siteId: 'pe-harbor', lx: 36, ly: 28 },
    ],
  },
  {
    id: 'city-qarth',
    locationId: 'qarth',
    theme: 'triple-wall',
    cx: 1315,
    cy: 550,
    w: 36,
    h: 32,
    palette: slaver,
    landmarks: [
      { siteId: 'qa-walls', lx: 28, ly: 42 },
      { siteId: 'qa-undying', lx: 62, ly: 60 },
    ],
  },
]

export const cityByLocation = Object.fromEntries(citySpecs.map((city) => [city.locationId, city]))

export const cityLocationIds = new Set(citySpecs.map((city) => city.locationId))

export function worldXY(city: CitySpec, lx: number, ly: number): { x: number; y: number } {
  return {
    x: city.cx - city.w / 2 + (lx / 100) * city.w,
    y: city.cy - city.h / 2 + (ly / 100) * city.h,
  }
}

export function landmarkXY(locationId: string, siteId: string): { x: number; y: number } | null {
  const city = cityByLocation[locationId]
  const mark = city?.landmarks.find((item) => item.siteId === siteId)
  if (!city || !mark) return null
  return worldXY(city, mark.lx, mark.ly)
}

export function cityBounds(city: CitySpec): [[number, number], [number, number]] {
  return [
    [city.cy - city.h / 2, city.cx - city.w / 2],
    [city.cy + city.h / 2, city.cx + city.w / 2],
  ]
}
