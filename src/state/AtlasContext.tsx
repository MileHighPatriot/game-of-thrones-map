import { useCallback, useMemo, useState, type ReactNode } from 'react'
import type { FlyTarget, LayerKey, Season, Selection } from '../types.ts'
import { AtlasContext, type AtlasContextValue, type LayerState } from './useAtlas.ts'

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

  const toggleLayer = useCallback(
    (key: LayerKey) => setLayers((current) => ({ ...current, [key]: !current[key] })),
    [],
  )
  const flyTo = useCallback(
    (x: number, y: number, nextZoom = 1.4) => setFlyTarget({ x, y, zoom: nextZoom }),
    [],
  )
  const fitWorld = useCallback(() => {
    setSelection(null)
    setExpandedPresence(null)
    setFitNonce((count) => count + 1)
  }, [])

  const value = useMemo<AtlasContextValue>(
    () => ({
      season,
      setSeason,
      selection,
      setSelection,
      layers,
      toggleLayer,
      zoom,
      setZoom,
      flyTarget,
      flyTo,
      fitNonce,
      fitWorld,
      expandedPresence,
      setExpandedPresence,
      playing,
      setPlaying,
    }),
    [season, selection, layers, toggleLayer, zoom, flyTarget, flyTo, fitNonce, fitWorld, expandedPresence, playing],
  )

  return <AtlasContext.Provider value={value}>{children}</AtlasContext.Provider>
}
