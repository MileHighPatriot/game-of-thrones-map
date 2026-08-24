import { useEffect } from 'react'
import { useHashRoute } from './lib/hashRoute.ts'
import { AtlasPage } from './pages/AtlasPage.tsx'
import { LandingPage } from './pages/LandingPage.tsx'
import { AtlasProvider } from './state/AtlasContext.tsx'
import { SiteNav } from './ui/SiteNav.tsx'

export default function App() {
  const route = useHashRoute()

  useEffect(() => {
    document.body.classList.toggle('is-hall', route === 'hall')
    document.body.classList.toggle('is-atlas', route === 'atlas')
    document.title = route === 'atlas' ? 'The Atlas · Westeros & Essos' : 'Westeros & Essos'
    return () => {
      document.body.classList.remove('is-hall', 'is-atlas')
    }
  }, [route])

  if (route === 'atlas') {
    return (
      <AtlasProvider>
        <div className="app is-atlas">
          <SiteNav current="atlas" />
          <AtlasPage />
        </div>
      </AtlasProvider>
    )
  }

  return (
    <div className="app is-hall">
      <LandingPage />
    </div>
  )
}
