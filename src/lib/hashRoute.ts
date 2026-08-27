import { useEffect, useState } from 'react'

export type Route = 'hall' | 'atlas' | 'armory' | 'keeps' | 'heroes' | 'words' | 'north' | 'roberts'

export function parseHash(hash = window.location.hash): Route {
  const path = hash.replace(/^#/, '').replace(/^\/+|\/+$/g, '')
  const head = path.split('/')[0]
  if (head === 'map' || head === 'atlas') return 'atlas'
  if (head === 'armory' || head === 'weapons') return 'armory'
  if (head === 'keeps' || head === 'castles') return 'keeps'
  if (head === 'heroes' || head === 'hero' || head === 'warriors') return 'heroes'
  if (head === 'words' || head === 'voice') return 'words'
  if (head === 'north' || head === 'true-north' || head === 'beyond') return 'north'
  if (head === 'roberts' || head === 'rebellion' || head === 'roberts-rebellion') return 'roberts'
  return 'hall'
}

export function hrefFor(route: Route): string {
  if (route === 'atlas') return '#/map'
  if (route === 'armory') return '#/armory'
  if (route === 'keeps') return '#/keeps'
  if (route === 'heroes') return '#/heroes'
  if (route === 'words') return '#/words'
  if (route === 'north') return '#/north'
  if (route === 'roberts') return '#/rebellion'
  return '#/'
}

export function atlasHref(locationId: string, season?: number): string {
  if (season) return `#/map/${locationId}/${season}`
  return `#/map/${locationId}`
}

export function parseAtlasFocus(hash = window.location.hash): { id: string; season: number | null } {
  const path = hash.replace(/^#/, '').replace(/^\/+|\/+$/g, '')
  const parts = path.split('/')
  if (parts[0] !== 'map' && parts[0] !== 'atlas') return { id: '', season: null }
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [route])

  return route
}
