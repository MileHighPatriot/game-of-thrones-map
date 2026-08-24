import { useEffect, useState } from 'react'

export type Route = 'hall' | 'atlas'

export function parseHash(hash = window.location.hash): Route {
  const path = hash.replace(/^#/, '').replace(/^\/+|\/+$/g, '')
  if (path === 'map' || path === 'atlas') return 'atlas'
  return 'hall'
}

export function hrefFor(route: Route): string {
  return route === 'atlas' ? '#/map' : '#/'
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
