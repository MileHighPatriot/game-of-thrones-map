export const MIN_ZOOM = -1
export const MAX_ZOOM = 4
export const WORLD_ZOOM = -0.15

export const ZOOM = {
  regionFill: -0.4,
  regionLabel: -0.1,
  wall: 0.2,
  banners: 0.35,
  majorPlaces: 0.5,
  roads: 0.7,
  minorPlaces: 1.25,
  placeLabels: 1.45,
  districts: 2.15,
  sites: 2.35,
  siteLabels: 2.7,
} as const

export function zoomName(zoom: number): string {
  if (zoom < 0.4) return 'World'
  if (zoom < 1.3) return 'Realms'
  if (zoom < 2.3) return 'Roads'
  return 'Streets'
}

export function flyZoomFor(kind: string): number {
  if (kind === 'region') return 1.15
  if (kind === 'house') return 2.1
  if (kind === 'route') return 1.6
  if (kind === 'battle') return 2.5
  if (kind === 'site') return 3.3
  return 2.7
}
