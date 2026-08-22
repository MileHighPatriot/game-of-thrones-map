import type { RegionFeature } from '../types.ts'

export function toLatLng(x: number, y: number): [number, number] {
  return [y, x]
}

export function closeRing(points: [number, number][]): [number, number][] {
  const first = points[0]
  const last = points[points.length - 1]
  if (!first || !last) return points
  if (first[0] === last[0] && first[1] === last[1]) return points
  return [...points, first]
}

export function polygon(points: [number, number][]): RegionFeature['geometry'] {
  return { type: 'Polygon', coordinates: [closeRing(points)] }
}

export function multiPolygon(rings: [number, number][][]): RegionFeature['geometry'] {
  return { type: 'MultiPolygon', coordinates: rings.map((ring) => [closeRing(ring)]) }
}

export function feature(
  props: RegionFeature['properties'],
  geometry: RegionFeature['geometry'],
): RegionFeature {
  return { type: 'Feature', properties: props, geometry }
}
