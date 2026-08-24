import { useEffect, useState } from 'react'

export type Route = 'hall' | 'atlas' | 'armory' | 'keeps' | 'words'

export function parseHash(hash = window.location.hash): Route {
  const path = hash.replace(/^#/, '').replace(/^\/+|\/+$/g, '')
  const head = path.split('/')[0]
  if (head === 'map' || head === 'atlas') return 'atlas'
  if (head === 'armory' || head === 'weapons') return 'armory'
  if (head === 'keeps' || head === 'castles') return 'keeps'
  if (head === 'words' || head === 'voice') return 'words'
  return 'hall'
}

export function hrefFor(route: Route): string {
  if (route === 'atlas') return '#/map'
  if (route === 'armory') return '#/armory'
  if (route === 'keeps') return '#/keeps'
  if (route === 'words') return '#/words'
  return '#/'
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
