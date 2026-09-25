import { useEffect, useLayoutEffect, useState } from 'react'

export type Route =
  | 'hall'
  | 'atlas'
  | 'armory'
  | 'keeps'
  | 'heroes'
  | 'words'
  | 'north'
  | 'roberts'
  | 'council'
  | 'throne'

/** Every hash head that opens a page, keyed by the page it opens. */
const ROUTE_HEADS: Record<Exclude<Route, 'hall'>, readonly string[]> = {
  atlas: ['map', 'atlas'],
  armory: ['armory', 'weapons'],
  keeps: ['keeps', 'castles'],
  heroes: ['heroes', 'hero', 'warriors'],
  words: ['words', 'voice'],
  north: ['north', 'true-north', 'beyond'],
  roberts: ['roberts', 'rebellion', 'roberts-rebellion'],
  council: ['council', 'small-council', 'smallcouncil'],
  throne: ['throne', 'iron-throne', 'ironthrone'],
}

function hashParts(hash: string): string[] {
  return hash.replace(/^#/, '').replace(/^\/+|\/+$/g, '').split('/')
}

export function parseHash(hash = window.location.hash): Route {
  const head = hashParts(hash)[0] ?? ''
  for (const [route, heads] of Object.entries(ROUTE_HEADS)) {
    if (heads.includes(head)) return route as Route
  }
  return 'hall'
}

/**
 * The anchor after a page's head, e.g. `#/weapons/needle` -> `needle` for the armory.
 * Empty when the hash belongs to another page or names no anchor.
 */
export function hashAnchor(route: Route, hash = window.location.hash): string {
  const [head, anchor] = hashParts(hash)
  if (route === 'hall' || !head || !anchor) return ''
  if (!ROUTE_HEADS[route].includes(head)) return ''
  try {
    return decodeURIComponent(anchor)
  } catch {
    return anchor
  }
}

export function hrefFor(route: Route): string {
  if (route === 'atlas') return '#/map'
  if (route === 'armory') return '#/armory'
  if (route === 'keeps') return '#/keeps'
  if (route === 'heroes') return '#/heroes'
  if (route === 'words') return '#/words'
  if (route === 'north') return '#/north'
  if (route === 'roberts') return '#/rebellion'
  if (route === 'council') return '#/council'
  if (route === 'throne') return '#/throne'
  return '#/'
}

export function atlasHref(locationId: string, season?: number): string {
  if (season) return `#/map/${locationId}/${season}`
  return `#/map/${locationId}`
}

export function parseAtlasFocus(hash = window.location.hash): { id: string; season: number | null } {
  const parts = hashParts(hash)
  if (!ROUTE_HEADS.atlas.includes(parts[0] ?? '')) return { id: '', season: null }
  const id = parts[1] ?? ''
  const seasonNum = Number(parts[2])
  const season = seasonNum >= 1 && seasonNum <= 8 ? seasonNum : null
  return { id, season }
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash())

  useEffect(() => {
    const onHash = () => setRoute(parseHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // A layout effect so the reset lands before a page's own deep-link scroll (a passive effect).
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [route])

  return route
}
