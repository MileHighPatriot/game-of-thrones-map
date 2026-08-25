import { battles } from '../data/battles.ts'
import { houseById } from '../data/houses.ts'
import { locationById } from '../data/locations.ts'
import { presenceBySeason } from '../data/presence.ts'
import { siteById } from '../data/sites.ts'
import type { Season, Selection } from '../types.ts'

export function focusRegionId(selection: Selection | null, season: Season): string | null {
  if (!selection) return null
  if (selection.kind === 'region') return selection.id
  if (selection.kind === 'location') return locationById[selection.id]?.regionId ?? null
  if (selection.kind === 'site') {
    const parent = siteById[selection.id]?.parentId
    return parent ? locationById[parent]?.regionId ?? null : null
  }
  if (selection.kind === 'battle') {
    const battle = battles.find((item) => item.id === selection.id)
    return battle ? locationById[battle.locationId]?.regionId ?? null : null
  }
  if (selection.kind === 'house') {
    const seat = houseById[selection.id]?.seatLocationId
    return seat ? locationById[seat]?.regionId ?? null : null
  }
  if (selection.kind === 'character') {
    const pin = presenceBySeason[season].find((item) => item.characterId === selection.id)
    return pin ? locationById[pin.locationId]?.regionId ?? null : null
  }
  return null
}

export function inFocusRegion(regionId: string | undefined, focus: string | null): boolean {
  return Boolean(focus && regionId === focus)
}
