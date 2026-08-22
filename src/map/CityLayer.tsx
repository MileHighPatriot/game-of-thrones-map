import { useEffect } from 'react'
import L from 'leaflet'
import { useMap } from 'react-leaflet'
import { cityBounds, citySpecs, type CitySpec } from '../data/cities.ts'
import { useAtlas } from '../state/AtlasContext.tsx'
import { citySvg } from './citySvg.ts'
import { ZOOM } from './zoom.ts'

const ART = 3
const svgCache = new Map<string, string>()

function cachedSvg(city: CitySpec): string {
  const key = `${ART}-${city.id}`
  const hit = svgCache.get(key)
  if (hit) return hit
  const svg = citySvg(city)
  svgCache.set(key, svg)
  return svg
}

export function CityLayer() {
  const map = useMap()
  const { layers, zoom } = useAtlas()
  const active = layers.places && zoom >= ZOOM.cityPlans

  useEffect(() => {
    if (!active) return
    let overlays: L.SVGOverlay[] = []

    const sync = () => {
      for (const overlay of overlays) overlay.remove()
      overlays = []
      if (map.getZoom() < ZOOM.cityPlans) return
      const view = map.getBounds().pad(0.35)
      for (const city of citySpecs) {
        const bounds = L.latLngBounds(cityBounds(city))
        if (!view.intersects(bounds)) continue
        const parsed = new DOMParser().parseFromString(cachedSvg(city), 'image/svg+xml').documentElement
        const element = document.importNode(parsed, true) as unknown as SVGElement
        const overlay = L.svgOverlay(element, bounds, { interactive: false, opacity: 1 })
        overlay.addTo(map)
        overlays.push(overlay)
      }
    }

    sync()
    map.on('moveend zoomend', sync)
    return () => {
      map.off('moveend zoomend', sync)
      for (const overlay of overlays) overlay.remove()
    }
  }, [active, map])

  return null
}
