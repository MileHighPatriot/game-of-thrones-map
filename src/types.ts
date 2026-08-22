export const MAP_WIDTH = 1600
export const MAP_HEIGHT = 900

export type Season = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type LayerKey = 'regions' | 'places' | 'banners' | 'battles' | 'characters'

export type Selection =
  | { kind: 'region'; id: string }
  | { kind: 'location'; id: string }
  | { kind: 'battle'; id: string }
  | { kind: 'character'; id: string }
  | { kind: 'house'; id: string }

export type RegionProps = {
  id: string
  name: string
  continent: 'Westeros' | 'Essos'
  lore: string
  banner: [number, number]
}

export type RegionFeature = {
  type: 'Feature'
  properties: RegionProps
  geometry:
    | { type: 'Polygon'; coordinates: number[][][] }
    | { type: 'MultiPolygon'; coordinates: number[][][][] }
}

export type House = {
  id: string
  name: string
  shortName: string
  words: string
  color: string
  accent: string
  iceAndFireId: number | null
  seatLocationId: string | null
  lore: string
}

export type Location = {
  id: string
  name: string
  kind: 'castle' | 'city' | 'landmark' | 'ruin' | 'town'
  regionId: string
  x: number
  y: number
  lore: string
}

export type Battle = {
  id: string
  name: string
  season: Season
  locationId: string
  factions: string[]
  outcome: string
  lore: string
}

export type Character = {
  id: string
  name: string
  houseId: string | null
  iceAndFireId: number | null
  thronesApiId: number | null
  portrait: string | null
  lore: string
  lastSeason: Season
}

export type PresencePin = {
  characterId: string
  locationId: string
}

export type IceAndFireHouse = {
  url: string
  name: string
  region: string
  coatOfArms: string
  words: string
  titles: string[]
  seats: string[]
  currentLord: string
  heir: string
  swornMembers: string[]
}

export type IceAndFireCharacter = {
  url: string
  name: string
  titles: string[]
  aliases: string[]
  born: string
  died: string
  culture: string
  tvSeries: string[]
  playedBy: string[]
  allegiances: string[]
}

export type ThronesPortrait = {
  id: number
  fullName: string
  title: string
  family: string
  imageUrl: string
}
