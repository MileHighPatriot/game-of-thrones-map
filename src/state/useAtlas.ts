import { createContext, useContext } from 'react'
import type { FlyTarget, LayerKey, Season, Selection } from '../types.ts'

export type LayerState = Record<LayerKey, boolean>

export type AtlasContextValue = {
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

export const AtlasContext = createContext<AtlasContextValue | null>(null)

export function useAtlas() {
  const context = useContext(AtlasContext)
  if (!context) throw new Error('useAtlas must be used inside AtlasProvider')
  return context
}
