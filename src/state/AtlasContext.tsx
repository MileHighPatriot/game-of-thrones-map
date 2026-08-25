import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { FlyTarget, LayerKey, Season, Selection } from '../types.ts'

export type LayerState = Record<LayerKey, boolean>

type AtlasContextValue = {
  season: Season
  setSeason: (season: Season) => void
  selection: Selection | null
  setSelection: (selection: Selection | null) => void
  layers: LayerState
  toggleLayer: (key: LayerKey) => void
  zoom: number
  setZoom: (zoom: number) => void
  flyTarget: FlyTarget | null
  flyTo: (x: number, y: number, zoom?: number) => void
  fitNonce: number
  fitWorld: () => void
  expandedPresence: string | null
  setExpandedPresence: (locationId: string | null) => void
  playing: boolean
  setPlaying: (playing: boolean) => void
}

const AtlasContext = createContext<AtlasContextValue | null>(null)

const initialLayers: LayerState = {
  regions: true,
  places: true,
  roads: true,
  banners: true,
  battles: true,
  characters: true,
}

export function AtlasProvider({ children }: { children: ReactNode }) {
  const [season, setSeason] = useState<Season>(1)
  const [selection, setSelection] = useState<Selection | null>(null)
  const [layers, setLayers] = useState<LayerState>(initialLayers)
  const [zoom, setZoom] = useState(0)
  const [flyTarget, setFlyTarget] = useState<FlyTarget | null>(null)
  const [fitNonce, setFitNonce] = useState(0)
  const [expandedPresence, setExpandedPresence] = useState<string | null>(null)
  const [playing, setPlaying] = useState(false)

  const value = useMemo<AtlasContextValue>(
    () => ({
      season,
      setSeason,
      selection,
      setSelection,
      layers,
      toggleLayer: (key) => setLayers((current) => ({ ...current, [key]: !current[key] })),
      zoom,
      setZoom,
      flyTarget,
      flyTo: (x, y, nextZoom = 1.4) => setFlyTarget({ x, y, zoom: nextZoom }),
      fitNonce,
      fitWorld: () => {
        setSelection(null)
        setExpandedPresence(null)
        setFitNonce((count) => count + 1)
      },
      expandedPresence,
      setExpandedPresence,
      playing,
      setPlaying,
    }),
    [season, selection, layers, zoom, flyTarget, fitNonce, expandedPresence, playing],
  )

  return <AtlasContext.Provider value={value}>{children}</AtlasContext.Provider>
}

export function useAtlas() {
  const context = useContext(AtlasContext)
  if (!context) throw new Error('useAtlas must be used inside AtlasProvider')
  return context
}
