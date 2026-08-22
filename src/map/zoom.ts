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
  if (kind === 'region') return 1.45
  if (kind === 'house') return 1.95
  if (kind === 'route') return 1.7
  if (kind === 'battle') return 2.15
  if (kind === 'site') return 2.35
  return 2.2
}
