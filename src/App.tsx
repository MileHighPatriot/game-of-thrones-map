import { useEffect } from 'react'
import { useHashRoute } from './lib/hashRoute.ts'
import { ArmoryPage } from './pages/ArmoryPage.tsx'
import { AtlasPage } from './pages/AtlasPage.tsx'
import { HeroesPage } from './pages/HeroesPage.tsx'
import { KeepsPage } from './pages/KeepsPage.tsx'
import { LandingPage } from './pages/LandingPage.tsx'
import { CouncilPage } from './pages/CouncilPage.tsx'
import { ThronePage } from './pages/ThronePage.tsx'
import { RobertsPage } from './pages/RobertsPage.tsx'
import { TrueNorthPage } from './pages/TrueNorthPage.tsx'
import { WordsPage } from './pages/WordsPage.tsx'
import { AtlasProvider } from './state/AtlasContext.tsx'
import { SiteNav } from './ui/SiteNav.tsx'

const TITLES: Record<string, string> = {
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

  useEffect(() => {
    document.body.classList.toggle('is-atlas', route === 'atlas')
    document.title = TITLES[route] ?? 'Westeros & Essos'
    return () => {
      document.body.classList.remove('is-atlas')
    }
  }, [route])

  if (route === 'atlas') {
    return (
      <AtlasProvider>
        <div className="app is-atlas">
          <SiteNav current="atlas" overlay />
          <AtlasPage />
        </div>
      </AtlasProvider>
    )
  }

  if (route === 'armory') {
    return (
      <div className="app is-armory">
        <ArmoryPage />
      </div>
    )
  }

  if (route === 'keeps') {
    return (
      <div className="app is-keeps">
        <KeepsPage />
      </div>
    )
  }

  if (route === 'heroes') {
    return (
      <div className="app is-heroes">
        <HeroesPage />
      </div>
    )
  }

  if (route === 'words') {
    return (
      <div className="app is-words">
        <WordsPage />
      </div>
    )
  }

  if (route === 'north') {
    return (
      <div className="app is-north">
        <TrueNorthPage />
      </div>
    )
  }

  if (route === 'roberts') {
    return (
      <div className="app is-roberts">
        <RobertsPage />
      </div>
    )
  }

  if (route === 'council') {
    return (
      <div className="app is-council">
        <CouncilPage />
      </div>
    )
  }

  if (route === 'throne') {
    return (
      <div className="app is-throne">
        <ThronePage />
      </div>
    )
  }

  return (
    <div className="app is-hall">
      <LandingPage />
    </div>
  )
}
