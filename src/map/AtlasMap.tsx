import { useEffect } from 'react'
import type { Feature, FeatureCollection } from 'geojson'
import {
  CircleMarker,
  GeoJSON,
  ImageOverlay,
  MapContainer,
  Marker,
  Polyline,
  Tooltip,
  ZoomControl,
  useMap,
  useMapEvents,
} from 'react-leaflet'
import L, { type DivIcon, type Layer, type LeafletMouseEvent, type PathOptions } from 'leaflet'
import { battles } from '../data/battles.ts'
import { controlBySeason } from '../data/control.ts'
import { houseById } from '../data/houses.ts'
import { locationById, locations, placeMinZoom } from '../data/locations.ts'
import { presenceBySeason } from '../data/presence.ts'
import { characterById } from '../data/characters.ts'
import { regionsGeoJSON } from '../data/regions.ts'
import { routes } from '../data/routes.ts'
import { sites } from '../data/sites.ts'
import { streets } from '../data/streets.ts'
import { bannerSvg } from '../lib/banners.ts'
import { toLatLng } from '../lib/geo.ts'
import { useAtlas } from '../state/AtlasContext.tsx'
import { MAP_HEIGHT, MAP_WIDTH, type RegionFeature } from '../types.ts'
import { MAX_ZOOM, MIN_ZOOM, ZOOM, flyZoomFor } from './zoom.ts'

const bounds: L.LatLngBoundsExpression = [
  [0, 0],
  [MAP_HEIGHT, MAP_WIDTH],
]

const basemapUrl = `${import.meta.env.BASE_URL}map/westeros-essos.png`

function icon(html: string, className: string, size: [number, number], anchor?: [number, number]): DivIcon {
  return L.divIcon({
    className,
    html,
    iconSize: size,
    iconAnchor: anchor ?? [size[0] / 2, size[1] / 2],
  })
}

function MapEvents() {
  const map = useMap()
  const { flyTarget, selection, setSelection, setZoom, fitNonce } = useAtlas()

  useMapEvents({
    click: () => setSelection(null),
    zoomend: () => setZoom(map.getZoom()),
    zoom: () => setZoom(map.getZoom()),
  })

  useEffect(() => {
    map.fitBounds(bounds, { padding: [28, 28] })
    setZoom(map.getZoom())
  }, [map, setZoom])

  useEffect(() => {
    if (!fitNonce) return
    map.flyToBounds(bounds, { padding: [28, 28], duration: 0.85 })
  }, [fitNonce, map])

  useEffect(() => {
    const timer = window.setTimeout(() => map.invalidateSize(), 280)
    return () => window.clearTimeout(timer)
  }, [selection, map])

  useEffect(() => {
    if (!flyTarget) return
    map.flyTo(toLatLng(flyTarget.x, flyTarget.y), flyTarget.zoom, { duration: 0.9 })
  }, [flyTarget, map])

  return null
}

function RegionLayer() {
  const { season, layers, selection, setSelection, zoom, flyTo } = useAtlas()
  if (!layers.regions) return null

  const control = controlBySeason[season]
  const fill = zoom > 2.2 ? 0.08 : zoom > 1.1 ? 0.16 : 0.26

  const style = (feature?: Feature): PathOptions => {
    const id = String(feature?.properties && (feature.properties as RegionFeature['properties']).id)
    const house = houseById[control[id]]
    const selected = selection?.kind === 'region' && selection.id === id
    return {
      color: selected ? '#f4e3b2' : house?.accent ?? '#3a2c1c',
      weight: selected ? 2.2 : zoom > 1.4 ? 0.6 : 1,
      fillColor: house?.color ?? '#8a7a62',
      fillOpacity: selected ? Math.max(fill, 0.22) : fill,
      interactive: zoom < 2.05,
    }
  }

  const onEachFeature = (feature: Feature, layer: Layer) => {
    const props = feature.properties as RegionFeature['properties'] | null
    if (!props?.id) return
    layer.on('click', (event: LeafletMouseEvent) => {
      L.DomEvent.stopPropagation(event)
      setSelection({ kind: 'region', id: props.id })
    })
    layer.on('dblclick', (event: LeafletMouseEvent) => {
      L.DomEvent.stopPropagation(event)
      flyTo(props.banner[0], props.banner[1], flyZoomFor('region'))
    })
  }

  return (
    <GeoJSON
      key={`regions-${season}-${selection?.kind === 'region' ? selection.id : ''}-${Math.round(fill * 100)}`}
      data={regionsGeoJSON as FeatureCollection}
      style={style}
      onEachFeature={onEachFeature}
    />
  )
}

function RegionLabels() {
  const { zoom, setSelection, flyTo } = useAtlas()
  if (zoom < ZOOM.regionLabel || zoom > 1.8) return null

  return (
    <>
      {regionsGeoJSON.features.map((region) => {
        const [x, y] = region.properties.banner
        return (
          <Marker
            key={`label-${region.properties.id}`}
            position={toLatLng(x, y + 18)}
            icon={icon(
              `<span class="map-label region-label">${region.properties.name}</span>`,
              'marker-label',
              [160, 20],
            )}
            eventHandlers={{
              click: (event) => {
                L.DomEvent.stopPropagation(event.originalEvent)
                setSelection({ kind: 'region', id: region.properties.id })
                flyTo(x, y, flyZoomFor('region'))
              },
            }}
          />
        )
      })}
    </>
  )
}

function RouteLayer() {
  const { layers, zoom, selection, setSelection, flyTo } = useAtlas()
  if (!layers.roads) return null

  return (
    <>
      {routes
        .filter((route) => zoom >= route.minZoom)
        .map((route) => {
          const selected = selection?.kind === 'route' && selection.id === route.id
          const color =
            route.kind === 'wall' ? '#e8f2f6' : route.kind === 'river' ? '#4d6f86' : '#6b4a28'
          const weight = route.kind === 'wall' ? 5 : route.kind === 'river' ? 3 : selected ? 3.4 : 2.2
          return (
            <Polyline
              key={route.id}
              positions={route.points.map(([x, y]) => toLatLng(x, y))}
              pathOptions={{
                color,
                weight,
                opacity: selected ? 0.95 : 0.72,
                dashArray: route.kind === 'road' ? '10 6' : undefined,
                lineCap: 'round',
                lineJoin: 'round',
              }}
              eventHandlers={{
                click: (event) => {
                  L.DomEvent.stopPropagation(event.originalEvent)
                  setSelection({ kind: 'route', id: route.id })
                },
                dblclick: (event) => {
                  L.DomEvent.stopPropagation(event.originalEvent)
                  const mid = route.points[Math.floor(route.points.length / 2)]
                  if (mid) flyTo(mid[0], mid[1], flyZoomFor('route'))
                },
              }}
            >
              <Tooltip sticky>{route.name}</Tooltip>
            </Polyline>
          )
        })}
    </>
  )
}

function DistrictLayer() {
  const { layers, zoom } = useAtlas()
  if (!layers.places || zoom < ZOOM.districts) return null

  return (
    <>
      {locations
        .filter((place) => place.kind === 'city' || place.kind === 'castle' || place.kind === 'ruin')
        .map((place) => (
          <CircleMarker
            key={`district-${place.id}`}
            center={toLatLng(place.x, place.y)}
            radius={place.kind === 'city' ? 38 : 28}
            pathOptions={{
              color: '#5a4030',
              weight: 1.1,
              fillColor: '#d8c4a0',
              fillOpacity: 0.2,
            }}
            interactive={false}
          />
        ))}
    </>
  )
}

function StreetLayer() {
  const { layers, zoom } = useAtlas()
  if (!layers.roads || zoom < ZOOM.districts) return null

  return (
    <>
      {streets.map((street) => (
        <Polyline
          key={street.id}
          positions={street.points.map(([x, y]) => toLatLng(x, y))}
          pathOptions={{
            color: '#6b4a28',
            weight: zoom >= ZOOM.sites ? 2.4 : 1.6,
            opacity: 0.55,
            lineCap: 'round',
          }}
          interactive={false}
        />
      ))}
    </>
  )
}

function PlaceLayer() {
  const { layers, zoom, setSelection, flyTo } = useAtlas()
  if (!layers.places) return null

  return (
    <>
      {locations
        .filter((place) => zoom >= placeMinZoom(place.id))
        .map((place) => {
          const showName = zoom >= ZOOM.placeLabels
          return (
            <Marker
              key={place.id}
              position={toLatLng(place.x, place.y)}
              icon={icon(
                `<span class="pin pin-${place.kind}"></span>${
                  showName ? `<span class="map-label place-label">${place.name}</span>` : ''
                }`,
                'marker-place',
                showName ? [120, 28] : [12, 12],
                showName ? [6, 8] : [6, 6],
              )}
              eventHandlers={{
                click: (event) => {
                  L.DomEvent.stopPropagation(event.originalEvent)
                  setSelection({ kind: 'location', id: place.id })
                },
                dblclick: (event) => {
                  L.DomEvent.stopPropagation(event.originalEvent)
                  flyTo(place.x, place.y, flyZoomFor('location'))
                },
              }}
            >
              {!showName && <Tooltip direction="top" offset={[0, -6]}>{place.name}</Tooltip>}
            </Marker>
          )
        })}
    </>
  )
}

function SiteLayer() {
  const { layers, zoom, setSelection } = useAtlas()
  if (!layers.places || zoom < ZOOM.sites) return null

  return (
    <>
      {sites.map((site) => (
        <Marker
          key={site.id}
          position={toLatLng(site.x, site.y)}
          icon={icon(
            `<span class="site-pin site-${site.kind}"></span>${
              zoom >= ZOOM.siteLabels ? `<span class="map-label site-label">${site.name}</span>` : ''
            }`,
            'marker-site',
            [130, 26],
            [6, 8],
          )}
          eventHandlers={{
            click: (event) => {
              L.DomEvent.stopPropagation(event.originalEvent)
              setSelection({ kind: 'site', id: site.id })
            },
          }}
        >
          {zoom < ZOOM.siteLabels && <Tooltip direction="top">{site.name}</Tooltip>}
        </Marker>
      ))}
    </>
  )
}

function BannerLayer() {
  const { season, layers, zoom, setSelection, flyTo } = useAtlas()
  if (!layers.banners || zoom < ZOOM.banners || zoom > 2.4) return null

  const control = controlBySeason[season]

  return (
    <>
      {regionsGeoJSON.features.map((region) => {
        const house = houseById[control[region.properties.id]]
        if (!house) return null
        const [x, y] = region.properties.banner
        return (
          <Marker
            key={`${region.properties.id}-${house.id}`}
            position={toLatLng(x, y)}
            icon={icon(bannerSvg(house.id), 'marker-banner', [28, 34])}
            eventHandlers={{
              click: (event) => {
                L.DomEvent.stopPropagation(event.originalEvent)
                setSelection({ kind: 'house', id: house.id })
              },
              dblclick: (event) => {
                L.DomEvent.stopPropagation(event.originalEvent)
                flyTo(x, y, flyZoomFor('house'))
              },
            }}
          >
            <Tooltip direction="top">{house.shortName}</Tooltip>
          </Marker>
        )
      })}
    </>
  )
}

function BattleLayer() {
  const { season, layers, zoom, setSelection } = useAtlas()
  if (!layers.battles || zoom < 0.4) return null

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
              icon={icon('<span class="pin-battle">⚔</span>', 'marker-battle', [22, 22])}
              eventHandlers={{
                click: (event) => {
                  L.DomEvent.stopPropagation(event.originalEvent)
                  setSelection({ kind: 'battle', id: battle.id })
                },
              }}
            >
              <Tooltip direction="top">{battle.name}</Tooltip>
            </Marker>
          )
        })}
    </>
  )
}

function PresenceLayer() {
  const { season, layers, zoom, setSelection } = useAtlas()
  if (!layers.characters || zoom < 0.6) return null

  const pins = presenceBySeason[season]
  const grouped = new Map<string, typeof pins>()
  for (const pin of pins) {
    const list = grouped.get(pin.locationId) ?? []
    list.push(pin)
    grouped.set(pin.locationId, list)
  }

  return (
    <>
      {pins.map((pin) => {
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
            key={pin.characterId}
            position={toLatLng(x, y)}
            icon={icon(`<span class="pin-char">${portrait}</span>`, 'marker-char', [26, 26])}
            eventHandlers={{
              click: (event) => {
                L.DomEvent.stopPropagation(event.originalEvent)
                setSelection({ kind: 'character', id: character.id })
              },
            }}
          >
            <Tooltip direction="top">{character.name}</Tooltip>
          </Marker>
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
      minZoom={MIN_ZOOM}
      maxZoom={MAX_ZOOM}
      zoomSnap={0.25}
      zoomDelta={0.5}
      wheelPxPerZoomLevel={90}
      maxBounds={bounds}
      maxBoundsViscosity={0.7}
      bounceAtZoomLimits={false}
      attributionControl={false}
      zoomControl={false}
    >
      <ImageOverlay url={basemapUrl} bounds={bounds} opacity={1} />
      <ZoomControl position="bottomleft" />
      <MapEvents />
      <RegionLayer />
      <RouteLayer />
      <DistrictLayer />
      <StreetLayer />
      <RegionLabels />
      <PlaceLayer />
      <SiteLayer />
      <BannerLayer />
      <BattleLayer />
      <PresenceLayer />
    </MapContainer>
  )
}
