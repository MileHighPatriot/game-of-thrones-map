import { lazy, Suspense, useEffect, type ComponentType } from 'react'
import { useHashRoute, type Route } from './lib/hashRoute.ts'

// Each room is its own chunk: the Hall no longer downloads Leaflet or every chronicle.
const pages: Record<Route, ComponentType> = {
  hall: lazy(() => import('./pages/LandingPage.tsx').then((m) => ({ default: m.LandingPage }))),
  atlas: lazy(() => import('./pages/AtlasPage.tsx').then((m) => ({ default: m.AtlasPage }))),
  armory: lazy(() => import('./pages/ArmoryPage.tsx').then((m) => ({ default: m.ArmoryPage }))),
  keeps: lazy(() => import('./pages/KeepsPage.tsx').then((m) => ({ default: m.KeepsPage }))),
  heroes: lazy(() => import('./pages/HeroesPage.tsx').then((m) => ({ default: m.HeroesPage }))),
  words: lazy(() => import('./pages/WordsPage.tsx').then((m) => ({ default: m.WordsPage }))),
  north: lazy(() => import('./pages/TrueNorthPage.tsx').then((m) => ({ default: m.TrueNorthPage }))),
  roberts: lazy(() => import('./pages/RobertsPage.tsx').then((m) => ({ default: m.RobertsPage }))),
  council: lazy(() => import('./pages/CouncilPage.tsx').then((m) => ({ default: m.CouncilPage }))),
  throne: lazy(() => import('./pages/ThronePage.tsx').then((m) => ({ default: m.ThronePage }))),
}

const TITLES: Record<Route, string> = {
  atlas: 'The Atlas · Westeros & Essos',
  armory: 'The Armory · Westeros & Essos',
  keeps: 'The Keeps · Westeros & Essos',
  heroes: 'The Hall of Heroes · Westeros & Essos',
  words: 'The Words · Westeros & Essos',
  north: 'The True North · Westeros & Essos',
  roberts: 'The Rebellion · Westeros & Essos',
  council: 'The Small Council · Westeros & Essos',
  throne: 'The Iron Throne · Westeros & Essos',
  hall: 'Westeros & Essos',
}

export default function App() {
  const route = useHashRoute()
  const Page = pages[route]

  useEffect(() => {
    document.body.classList.toggle('is-atlas', route === 'atlas')
    document.title = TITLES[route]
    return () => {
      document.body.classList.remove('is-atlas')
    }
  }, [route])

  return (
    <div className={`app is-${route}`}>
      {/* While a room's chunk loads, the page shows only its own background. */}
      <Suspense fallback={null}>
        <Page />
      </Suspense>
    </div>
  )
}
