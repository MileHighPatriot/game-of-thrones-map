import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { LayerKey, Season, Selection } from '../types.ts'

export type LayerState = Record<LayerKey, boolean>

type AtlasContextValue = {
  season: Season
  setSeason: (season: Season) => void
  selection: Selection | null
  setSelection: (selection: Selection | null) => void
  layers: LayerState
  toggleLayer: (key: LayerKey) => void
  flyTarget: [number, number] | null
  flyTo: (x: number, y: number) => void
}

const AtlasContext = createContext<AtlasContextValue | null>(null)

const initialLayers: LayerState = {
  regions: true,
  places: true,
  banners: true,
  battles: true,
  characters: true,
}

export function AtlasProvider({ children }: { children: ReactNode }) {
  const [season, setSeason] = useState<Season>(1)
  const [selection, setSelection] = useState<Selection | null>(null)
  const [layers, setLayers] = useState<LayerState>(initialLayers)
  const [flyTarget, setFlyTarget] = useState<[number, number] | null>(null)

  const value = useMemo<AtlasContextValue>(
    () => ({
      season,
      setSeason,
      selection,
      setSelection,
      layers,
      toggleLayer: (key) => setLayers((current) => ({ ...current, [key]: !current[key] })),
      flyTarget,
      flyTo: (x, y) => setFlyTarget([x, y]),
    }),
    [season, selection, layers, flyTarget],
  )

  return <AtlasContext.Provider value={value}>{children}</AtlasContext.Provider>
}

export function useAtlas() {
  const context = useContext(AtlasContext)
  if (!context) throw new Error('useAtlas must be used inside AtlasProvider')
  return context
}
