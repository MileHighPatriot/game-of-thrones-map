import { useEffect, useRef } from 'react'
import { Marker, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import { characterById } from '../data/characters.ts'
import { locationById } from '../data/locations.ts'
import { presenceBySeason } from '../data/presence.ts'
import { clusterHtml, compareCharacters, personHtml } from '../lib/people.ts'
import { toLatLng } from '../lib/geo.ts'
import { useAtlas } from '../state/AtlasContext.tsx'
import type { Character, Season } from '../types.ts'
import { ZOOM, flyZoomFor } from './zoom.ts'

function icon(html: string, className: string, size: [number, number], anchor?: [number, number]) {
  return L.divIcon({
    className,
    html,
    iconSize: size,
    iconAnchor: anchor ?? [size[0] / 2, size[1] / 2],
  })
}

function offsetLatLng(
  x: number,
  y: number,
  angle: number,
  pixelRadius: number,
  zoom: number,
): [number, number] {
  const [lat, lng] = toLatLng(x, y)
  const mapRadius = pixelRadius / 2 ** Math.max(zoom, -0.6)
  return [lat + Math.sin(angle) * mapRadius, lng + Math.cos(angle) * mapRadius]
}

function peopleAtLocation(season: Season, locationId: string, selectedId: string | null): Character[] {
  const people: Character[] = []
  for (const pin of presenceBySeason[season]) {
    if (pin.locationId !== locationId) continue
    const character = characterById[pin.characterId]
    if (character) people.push(character)
  }
  people.sort(compareCharacters)
  if (selectedId) {
    const index = people.findIndex((person) => person.id === selectedId)
    if (index > 0) {
      const [picked] = people.splice(index, 1)
      if (picked) people.unshift(picked)
    }
  }
  return people
}

export function FollowSelection() {
  const { season, selection, playing, flyTo, setExpandedPresence } = useAtlas()
  const previousSeason = useRef(season)

  useEffect(() => {
    if (previousSeason.current === season) return
    previousSeason.current = season
    if (selection?.kind !== 'character') return
    const pin = presenceBySeason[season].find((item) => item.characterId === selection.id)
    const place = pin ? locationById[pin.locationId] : undefined
    if (!place) {
      setExpandedPresence(null)
      return
    }
    setExpandedPresence(place.id)
    if (!playing) flyTo(place.x, place.y, flyZoomFor('character'))
  }, [season, selection, playing, flyTo, setExpandedPresence])

  return null
}

export function PresenceLayer() {
  const {
    season,
    layers,
    zoom,
    selection,
    setSelection,
    expandedPresence,
    setExpandedPresence,
    flyTo,
  } = useAtlas()

  useEffect(() => {
    if (!expandedPresence) return
    const stillHere = presenceBySeason[season].some((pin) => pin.locationId === expandedPresence)
    if (!stillHere) setExpandedPresence(null)
  }, [season, expandedPresence, setExpandedPresence])

  if (!layers.characters) return null

  const selectedId = selection?.kind === 'character' ? selection.id : null
  const locationIds = [...new Set(presenceBySeason[season].map((pin) => pin.locationId))]

  return (
    <>
      {locationIds.map((locationId) => {
        const place = locationById[locationId]
        if (!place) return null
        const people = peopleAtLocation(season, locationId, selectedId)
        if (people.length === 0) return null
        const spread = zoom >= ZOOM.presenceSpread
        const names = people.map((person) => person.name).join(', ')
        const compact = zoom < 0.9

        if (!spread) {
          const size: [number, number] = compact ? [44, 44] : [128, 64]
          const anchor: [number, number] = compact ? [22, 22] : [64, 64]
          return (
            <Marker
              key={`cluster-${season}-${locationId}`}
              position={toLatLng(place.x, place.y)}
              zIndexOffset={selectedId && people.some((person) => person.id === selectedId) ? 1400 : 900}
              riseOnHover
              icon={icon(
                clusterHtml(people, place.name, selectedId, compact),
                'marker-presence',
                size,
                anchor,
              )}
              eventHandlers={{
                click: (event) => {
                  if (event.originalEvent) L.DomEvent.stop(event.originalEvent)
                  setExpandedPresence(locationId)
                  if (people.length === 1 && people[0]) {
                    setSelection({ kind: 'character', id: people[0].id })
                  } else {
                    setSelection({ kind: 'location', id: locationId })
                  }
                  flyTo(place.x, place.y, flyZoomFor('character'))
                },
                dblclick: (event) => {
                  if (event.originalEvent) L.DomEvent.stop(event.originalEvent)
                  setExpandedPresence(locationId)
                  flyTo(place.x, place.y, flyZoomFor('character'))
                },
              }}
            >
              <Tooltip direction="top" offset={[0, compact ? -18 : -56]}>
                {place.name}: {names}
              </Tooltip>
            </Marker>
          )
        }

        return people.map((person, index) => {
          const innerCount = Math.min(people.length, 8)
          const ring = index < innerCount ? 0 : 1
          const ringCount = ring === 0 ? innerCount : people.length - innerCount
          const ringIndex = ring === 0 ? index : index - innerCount
          const radius = (34 + ring * 28 + Math.min(people.length, 8) * 2) * (0.7 + zoom * 0.28)
          const angle =
            people.length === 1 ? -Math.PI / 2 : (ringIndex / ringCount) * Math.PI * 2 - Math.PI / 2
          const position =
            people.length === 1
              ? offsetLatLng(place.x, place.y, -Math.PI / 2, 26, zoom)
              : offsetLatLng(place.x, place.y, angle, radius, zoom)
          const selected = person.id === selectedId
          return (
            <Marker
              key={`person-${season}-${person.id}`}
              position={position}
              zIndexOffset={selected ? 1600 : 1000}
              riseOnHover
              icon={icon(personHtml(person, selected), 'marker-presence', [76, 56], [38, 20])}
              eventHandlers={{
                click: (event) => {
                  if (event.originalEvent) L.DomEvent.stop(event.originalEvent)
                  setSelection({ kind: 'character', id: person.id })
                  setExpandedPresence(locationId)
                },
                dblclick: (event) => {
                  if (event.originalEvent) L.DomEvent.stop(event.originalEvent)
                  flyTo(place.x, place.y, flyZoomFor('character'))
                },
              }}
            >
              <Tooltip direction="top" offset={[0, -16]}>
                {person.name} · {place.name}
              </Tooltip>
            </Marker>
          )
        })
      })}
    </>
  )
}
