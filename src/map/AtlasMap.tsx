import { useEffect } from 'react'
import type { Feature, FeatureCollection } from 'geojson'
import {
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
import { locationById, locations, majorLocationIds, placeMinZoom } from '../data/locations.ts'
import { seatPortraits } from '../data/portraits.ts'
import { presenceBySeason } from '../data/presence.ts'
import { regionLabelAt, regionShortName, regionsGeoJSON } from '../data/regions.ts'
import { routes } from '../data/routes.ts'
import { bannerSvg, regionPaint } from '../lib/banners.ts'
import { sx, sy, toLatLng } from '../lib/geo.ts'
import { useAtlas } from '../state/AtlasContext.tsx'
import { MAP_HEIGHT, MAP_WIDTH, type RegionFeature } from '../types.ts'
import { FollowSelection, PresenceLayer } from './PresenceLayer.tsx'
import { MAX_ZOOM, ZOOM, fitZoom, flyZoomFor } from './zoom.ts'

const bounds: L.LatLngBoundsExpression = [
  [0, 0],
  [MAP_HEIGHT, MAP_WIDTH],
]

const voidPad = 220
const voidBounds: L.LatLngBoundsExpression = [
  [-voidPad, -voidPad],
  [MAP_HEIGHT + voidPad, MAP_WIDTH + voidPad],
]

const imageCenter: L.LatLngExpression = [MAP_HEIGHT / 2, MAP_WIDTH / 2]

const basemapUrl = `${import.meta.env.BASE_URL}map/westeros-essos.png`

function icon(html: string, className: string, size: [number, number], anchor?: [number, number]): DivIcon {
  return L.divIcon({
    className,
    html,
    iconSize: size,
    iconAnchor: anchor ?? [size[0] / 2, size[1] / 2],
  })
}

function applyFit(map: L.Map) {
  const size = map.getSize()
  const min = fitZoom(size.x, size.y)
  map.setMinZoom(min)
  if (map.getZoom() < min) map.setZoom(min)
  return min
}

function MapEvents() {
  const map = useMap()
  const { flyTarget, selection, setSelection, setZoom, fitNonce, setExpandedPresence } = useAtlas()

  useMapEvents({
    click: (event) => {
      const target = event.originalEvent.target
      if (target instanceof Element && target.closest('.leaflet-marker-icon')) return
      setSelection(null)
      setExpandedPresence(null)
    },
    zoomend: () => setZoom(map.getZoom()),
    zoom: () => setZoom(map.getZoom()),
  })

  useEffect(() => {
    const min = applyFit(map)
    map.setView(imageCenter, min, { animate: false })
    setZoom(map.getZoom())
    const onResize = () => {
      applyFit(map)
      setZoom(map.getZoom())
    }
    map.on('resize', onResize)
    return () => {
      map.off('resize', onResize)
    }
  }, [map, setZoom])

  useEffect(() => {
    if (!fitNonce) return
    const min = applyFit(map)
    map.flyTo(imageCenter, min, { duration: 0.7 })
  }, [fitNonce, map])

  useEffect(() => {
    const timer = window.setTimeout(() => map.invalidateSize(), 280)
    return () => window.clearTimeout(timer)
  }, [selection, map])

  useEffect(() => {
    if (!flyTarget) return
    map.flyTo(toLatLng(flyTarget.x, flyTarget.y), flyTarget.zoom, { duration: 1.05 })
  }, [flyTarget, map])

  return null
}

function RegionLayer() {
  const { season, layers, selection, setSelection, zoom, flyTo } = useAtlas()
  if (!layers.regions) return null

  const control = controlBySeason[season]
  const fill = zoom < 0.9 ? 0.58 : zoom < 1.7 ? 0.46 : 0.28
  const band = zoom < 0.9 ? 'c' : zoom < 1.7 ? 'r' : 's'

  const style = (feature?: Feature): PathOptions => {
    const id = String(feature?.properties && (feature.properties as RegionFeature['properties']).id)
    const houseId = control[id]
    const paint = regionPaint(houseId)
    const selected = selection?.kind === 'region' && selection.id === id
    return {
      color: selected ? '#f4e3b2' : paint.stroke,
      weight: selected ? 3.2 : zoom < 1.7 ? 2.4 : 1.5,
      fillColor: paint.fill,
      fillOpacity: selected ? Math.max(fill, 0.64) : fill,
      opacity: 1,
      className: 'region-stain',
      interactive: zoom < 2.2,
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
      key={`regions-${season}-${selection?.kind === 'region' ? selection.id : ''}-${band}`}
      data={regionsGeoJSON as FeatureCollection}
      style={style}
      coordsToLatLng={(coords) => L.latLng(sy(coords[1]), sx(coords[0]))}
      onEachFeature={onEachFeature}
    />
  )
}

function RegionLabels() {
  const { season, layers, zoom, setSelection, flyTo } = useAtlas()
  if (!layers.regions) return null
  if (zoom < ZOOM.regionLabel || zoom > ZOOM.regionLabelMax) return null

  const control = controlBySeason[season]
  return (
    <>
      {regionsGeoJSON.features.map((region) => {
        const [x, y] = regionLabelAt[region.properties.id] ?? region.properties.banner
        const house = houseById[control[region.properties.id]]
        const name = regionShortName[region.properties.id] ?? region.properties.name
        const plate = `<div class="realm-plate">${
          house ? bannerSvg(house.id) : ''
        }<span><strong>${name}</strong>${
          house ? `<em>${house.shortName}</em>` : ''
        }</span></div>`
        return (
          <Marker
            key={`label-${region.properties.id}-${house?.id ?? 'none'}`}
            position={toLatLng(x, y)}
            zIndexOffset={200}
            icon={icon(plate, 'marker-label', [176, 48], [88, 24])}
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

function seatSize(zoom: number, major: boolean): number {
  if (zoom < 0.95) return major ? 46 : 32
  if (zoom < 1.55) return major ? 64 : 46
  return major ? 84 : 62
}

function SeatLayer() {
  const { layers, zoom, setSelection, flyTo } = useAtlas()
  if (!layers.places) return null

  return (
    <>
      {locations.map((place) => {
        const src = seatPortraits[place.id]
        if (!src) return null
        const min = majorLocationIds.has(place.id) ? -1 : placeMinZoom(place.id) - 0.2
        if (zoom < min) return null
        const size = seatSize(zoom, majorLocationIds.has(place.id))
        const showName = zoom >= ZOOM.placeLabels
        const html = `<div class="seat-medal" style="width:${size}px;height:${size}px"><img src="${src}" alt=""></div>${
          showName ? `<span class="map-label place-label">${place.name}</span>` : ''
        }`
        return (
          <Marker
            key={`seat-${place.id}-${size}`}
            position={toLatLng(place.x, place.y)}
            zIndexOffset={450}
            icon={icon(html, 'marker-seat', showName ? [size + 110, size] : [size, size], [size / 2, size / 2])}
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
            {!showName && (
              <Tooltip direction="top" offset={[0, -size / 2]}>
                {place.name}
              </Tooltip>
            )}
          </Marker>
        )
      })}
    </>
  )
}

function PlaceLayer() {
  const { layers, zoom, season, setSelection, flyTo } = useAtlas()
  if (!layers.places) return null

  const clusteredPeople =
    layers.characters && zoom < ZOOM.presenceSpread
      ? new Set(presenceBySeason[season].map((pin) => pin.locationId))
      : null

  return (
    <>
      {locations
        .filter((place) => {
          if (seatPortraits[place.id]) return false
          if (clusteredPeople?.has(place.id)) return false
          return zoom >= placeMinZoom(place.id)
        })
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

function BannerLayer() {
  const { season, layers, zoom, setSelection, flyTo } = useAtlas()
  if (!layers.banners || zoom <= ZOOM.regionLabelMax) return null

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
  if (!layers.battles || zoom < ZOOM.battles) return null

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
              position={toLatLng(place.x + 16, place.y - 6)}
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

export function AtlasMap() {
  return (
    <MapContainer
      className="atlas-map"
      crs={L.CRS.Simple}
      center={imageCenter}
      zoom={0.1}
      minZoom={-1}
      maxZoom={MAX_ZOOM}
      zoomSnap={0.25}
      zoomDelta={0.5}
      wheelPxPerZoomLevel={90}
      maxBounds={voidBounds}
      maxBoundsViscosity={0.55}
      bounceAtZoomLimits={false}
      attributionControl={false}
      zoomControl={false}
    >
      <ImageOverlay url={basemapUrl} bounds={bounds} opacity={1} />
      <ZoomControl position="bottomleft" />
      <MapEvents />
      <FollowSelection />
      <RegionLayer />
      <RouteLayer />
      <RegionLabels />
      <PlaceLayer />
      <SeatLayer />
      <BannerLayer />
      <BattleLayer />
      <PresenceLayer />
    </MapContainer>
  )
}
