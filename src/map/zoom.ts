import { MAP_HEIGHT, MAP_WIDTH } from '../types.ts'

export const MAX_ZOOM = 3.15

export const ZOOM = {
  regionFill: 0.15,
  regionLabel: 0.2,
  wall: 0.35,
  banners: 0.45,
  majorPlaces: 0.5,
  roads: 0.75,
  minorPlaces: 1.25,
  placeLabels: 1.45,
  /** Below this, people stay grouped by city so the continent stays readable. */
  presenceSpread: 1.12,
} as const

export function fitZoom(width: number, height: number): number {
  if (width < 40 || height < 40) return -0.2
  const raw = Math.min(Math.log2(width / MAP_WIDTH), Math.log2(height / MAP_HEIGHT))
  return raw - 0.04
}

export function zoomName(zoom: number): string {
  if (zoom < 0.85) return 'Continent'
  if (zoom < 1.7) return 'Realms'
  return 'Seat'
}

export function flyZoomFor(kind: string): number {
  if (kind === 'character') return 0.9
  if (kind === 'region') return 1.35
  if (kind === 'house') return 1.55
  if (kind === 'route') return 1.55
  if (kind === 'location') return 1.4
  if (kind === 'battle') return 1.5
  if (kind === 'site') return 2.35
  return 1.4
}
