import { MAP_HEIGHT, MAP_WIDTH } from '../types.ts'

export const MAX_ZOOM = 6.5

export const ZOOM = {
  regionFill: 0.2,
  regionLabel: 0.2,
  wall: 0.35,
  banners: 0.5,
  majorPlaces: 0.55,
  roads: 0.8,
  minorPlaces: 1.4,
  placeLabels: 1.6,
  cityPlans: 2.45,
  sites: 3.35,
  siteLabels: 4.15,
} as const

export function coverZoom(width: number, height: number): number {
  if (width < 40 || height < 40) return 0.15
  return Math.max(Math.log2(width / MAP_WIDTH), Math.log2(height / MAP_HEIGHT))
}

export function zoomName(zoom: number): string {
  if (zoom < 1.15) return 'Continent'
  if (zoom < 2.35) return 'Realms'
  if (zoom < 3.6) return 'City'
  return 'Streets'
}

export function flyZoomFor(kind: string): number {
  if (kind === 'region') return 1.7
  if (kind === 'house') return 3.4
  if (kind === 'route') return 2.15
  if (kind === 'battle') return 4.2
  if (kind === 'site') return 6.15
  return 5.85
}
