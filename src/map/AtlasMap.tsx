import { useEffect } from 'react'
import type { Feature, FeatureCollection } from 'geojson'
import { GeoJSON, ImageOverlay, MapContainer, Marker, useMap, useMapEvents } from 'react-leaflet'
import L, { type DivIcon, type Layer, type LeafletMouseEvent, type PathOptions } from 'leaflet'
import { battles } from '../data/battles.ts'
import { controlBySeason } from '../data/control.ts'
import { houseById } from '../data/houses.ts'
import { locationById, locations } from '../data/locations.ts'
import { presenceBySeason } from '../data/presence.ts'
import { characterById } from '../data/characters.ts'
import { regionsGeoJSON } from '../data/regions.ts'
import { bannerSvg } from '../lib/banners.ts'
import { toLatLng } from '../lib/geo.ts'
import { useAtlas } from '../state/AtlasContext.tsx'
import { MAP_HEIGHT, MAP_WIDTH, type RegionFeature } from '../types.ts'

const bounds: L.LatLngBoundsExpression = [
  [0, 0],
  [MAP_HEIGHT, MAP_WIDTH],
]

const basemapUrl = `${import.meta.env.BASE_URL}map/westeros-essos.png`

function divIcon(html: string, className: string, size: [number, number]): DivIcon {
  return L.divIcon({
    className,
    html,
    iconSize: size,
    iconAnchor: [size[0] / 2, size[1] / 2],
  })
}

function MapEvents() {
  const map = useMap()
  const { flyTarget, setSelection } = useAtlas()

  useMapEvents({
    click: () => setSelection(null),
  })

  useEffect(() => {
    map.fitBounds(bounds, { padding: [24, 24] })
  }, [map])

  useEffect(() => {
    if (!flyTarget) return
    map.flyTo(toLatLng(flyTarget[0], flyTarget[1]), Math.max(map.getZoom(), 1.2), {
      duration: 0.7,
    })
  }, [flyTarget, map])

  return null
}

function RegionLayer() {
  const { season, layers, selection, setSelection } = useAtlas()
  if (!layers.regions) return null

  const control = controlBySeason[season]

  const style = (feature?: Feature): PathOptions => {
    const id = String(feature?.properties && (feature.properties as RegionFeature['properties']).id)
    const house = houseById[control[id]]
    const selected = selection?.kind === 'region' && selection.id === id
    return {
      color: selected ? '#f4e3b2' : house?.accent ?? '#3a2c1c',
      weight: selected ? 2.4 : 1,
      fillColor: house?.color ?? '#8a7a62',
      fillOpacity: selected ? 0.42 : 0.28,
    }
  }

  const onEachFeature = (feature: Feature, layer: Layer) => {
    const id = (feature.properties as RegionFeature['properties'] | null)?.id
    if (!id) return
    layer.on('click', (event: LeafletMouseEvent) => {
      L.DomEvent.stopPropagation(event)
      setSelection({ kind: 'region', id })
    })
  }

  return (
    <GeoJSON
      key={`regions-${season}-${selection?.kind === 'region' ? selection.id : ''}`}
      data={regionsGeoJSON as FeatureCollection}
      style={style}
      onEachFeature={onEachFeature}
    />
  )
}

function PlaceLayer() {
  const { layers, setSelection } = useAtlas()
  if (!layers.places) return null

  return (
    <>
      {locations.map((place) => (
        <Marker
          key={place.id}
          position={toLatLng(place.x, place.y)}
          icon={divIcon(`<span class="pin pin-${place.kind}"></span>`, 'marker-place', [12, 12])}
          eventHandlers={{
            click: (event) => {
              L.DomEvent.stopPropagation(event.originalEvent)
              setSelection({ kind: 'location', id: place.id })
            },
          }}
        />
      ))}
    </>
  )
}

function BannerLayer() {
  const { season, layers, setSelection } = useAtlas()
  if (!layers.banners) return null

  const control = controlBySeason[season]

  return (
    <>
      {regionsGeoJSON.features.map((region) => {
        const houseId = control[region.properties.id]
        const house = houseById[houseId]
        if (!house) return null
        const [x, y] = region.properties.banner
        return (
          <Marker
            key={`${region.properties.id}-${houseId}`}
            position={toLatLng(x, y)}
            icon={divIcon(bannerSvg(house.id), 'marker-banner', [28, 34])}
            eventHandlers={{
              click: (event) => {
                L.DomEvent.stopPropagation(event.originalEvent)
                setSelection({ kind: 'house', id: house.id })
              },
            }}
          />
        )
      })}
    </>
  )
}

function BattleLayer() {
  const { season, layers, setSelection } = useAtlas()
  if (!layers.battles) return null

  return (
    <>
      {battles
        .filter((battle) => battle.season === season)
        .map((battle) => {
          const place = locationById[battle.locationId]
          if (!place) return null
          return (
            <Marker
              key={battle.id}
              position={toLatLng(place.x, place.y + 10)}
              icon={divIcon('<span class="pin-battle">⚔</span>', 'marker-battle', [22, 22])}
              eventHandlers={{
                click: (event) => {
                  L.DomEvent.stopPropagation(event.originalEvent)
                  setSelection({ kind: 'battle', id: battle.id })
                },
              }}
            />
          )
        })}
    </>
  )
}

function PresenceLayer() {
  const { season, layers, setSelection } = useAtlas()
  if (!layers.characters) return null

  const pins = presenceBySeason[season]
  const grouped = new Map<string, typeof pins>()
  for (const pin of pins) {
    const list = grouped.get(pin.locationId) ?? []
    list.push(pin)
    grouped.set(pin.locationId, list)
  }

  return (
    <>
      {pins.map((pin, index) => {
        const character = characterById[pin.characterId]
        const place = locationById[pin.locationId]
        if (!character || !place) return null
        const siblings = grouped.get(pin.locationId) ?? []
        const siblingIndex = siblings.findIndex((item) => item.characterId === pin.characterId)
        const angle = siblings.length > 1 ? (siblingIndex / siblings.length) * Math.PI * 2 : 0
        const radius = siblings.length > 1 ? 16 : 0
        const x = place.x + Math.cos(angle) * radius
        const y = place.y + Math.sin(angle) * radius + 14
        const initial = character.name
          .split(' ')
          .map((part) => part[0])
          .join('')
          .slice(0, 2)
        const portrait = character.portrait
          ? `<img src="${character.portrait}" alt="" />`
          : `<span>${initial}</span>`
        return (
          <Marker
            key={`${pin.characterId}-${index}`}
            position={toLatLng(x, y)}
            icon={divIcon(`<span class="pin-char">${portrait}</span>`, 'marker-char', [26, 26])}
            eventHandlers={{
              click: (event) => {
                L.DomEvent.stopPropagation(event.originalEvent)
                setSelection({ kind: 'character', id: character.id })
              },
            }}
          />
        )
      })}
    </>
  )
}

export function AtlasMap() {
  return (
    <MapContainer
      className="atlas-map"
      crs={L.CRS.Simple}
      center={toLatLng(MAP_WIDTH / 2, MAP_HEIGHT / 2)}
      zoom={0}
      minZoom={-1.2}
      maxZoom={2.4}
      maxBounds={bounds}
      maxBoundsViscosity={0.85}
      attributionControl={false}
      zoomControl
    >
      <ImageOverlay url={basemapUrl} bounds={bounds} opacity={1} />
      <MapEvents />
      <RegionLayer />
      <PlaceLayer />
      <BannerLayer />
      <BattleLayer />
      <PresenceLayer />
    </MapContainer>
  )
}
