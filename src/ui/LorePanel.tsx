import { useEffect, useState } from 'react'
import { fetchCharacter, fetchHouse } from '../api/iceAndFire.ts'
import { fetchPortrait } from '../api/thrones.ts'
import { battles } from '../data/battles.ts'
import { characterById } from '../data/characters.ts'
import { controlBySeason } from '../data/control.ts'
import { houseById } from '../data/houses.ts'
import { locationById, locations } from '../data/locations.ts'
import { presenceBySeason } from '../data/presence.ts'
import { regionById } from '../data/regions.ts'
import { bannerSvg } from '../lib/banners.ts'
import { useAtlas } from '../state/AtlasContext.tsx'
import type { IceAndFireCharacter, IceAndFireHouse, ThronesPortrait } from '../types.ts'

function peopleHere(season: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8, locationId: string) {
  return presenceBySeason[season].flatMap((pin) => {
    if (pin.locationId !== locationId) return []
    const person = characterById[pin.characterId]
    return person ? [person] : []
  })
}

export function LorePanel() {
  const { season, selection, setSelection } = useAtlas()
  const [apiHouse, setApiHouse] = useState<IceAndFireHouse | null>(null)
  const [apiCharacter, setApiCharacter] = useState<IceAndFireCharacter | null>(null)
  const [portrait, setPortrait] = useState<ThronesPortrait | null>(null)
  const [source, setSource] = useState<'live' | 'cache' | null>(null)

  const houseIdForSelection = (() => {
    if (!selection) return null
    if (selection.kind === 'house') return selection.id
    if (selection.kind === 'region') return controlBySeason[season][selection.id] ?? null
    if (selection.kind === 'character') return characterById[selection.id]?.houseId ?? null
    if (selection.kind === 'location') {
      const regionId = locationById[selection.id]?.regionId
      return regionId ? (controlBySeason[season][regionId] ?? null) : null
    }
    return null
  })()

  const house = houseIdForSelection ? houseById[houseIdForSelection] : undefined

  useEffect(() => {
    let cancelled = false
    setApiHouse(null)
    setApiCharacter(null)
    setPortrait(null)
    setSource(null)

    async function load() {
      if (house?.iceAndFireId) {
        const record = await fetchHouse(house.iceAndFireId)
        if (!cancelled && record) {
          setApiHouse(record.data)
          setSource(record.live ? 'live' : 'cache')
        }
      }
      if (selection?.kind === 'character') {
        const character = characterById[selection.id]
        if (character?.iceAndFireId) {
          const record = await fetchCharacter(character.iceAndFireId)
          if (!cancelled && record) setApiCharacter(record.data)
        }
        if (character?.thronesApiId != null) {
          const shot = await fetchPortrait(character.thronesApiId)
          if (!cancelled && shot) setPortrait(shot)
        }
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [house?.iceAndFireId, selection])

  if (!selection) return null

  if (selection.kind === 'region') {
    const region = regionById[selection.id]
    if (!region) return null
    const present = locations
      .filter((place) => place.regionId === region.properties.id)
      .flatMap((place) => peopleHere(season, place.id))
    return (
      <aside className="panel">
        <PanelHead
          eyebrow={`${region.properties.continent} · Season ${season}`}
          title={region.properties.name}
          onClose={() => setSelection(null)}
        />
        {house && (
          <div className="banner-row" dangerouslySetInnerHTML={{ __html: bannerSvg(house.id) }} />
        )}
        <p className="words">{house?.words}</p>
        <p>{region.properties.lore}</p>
        {house && (
          <p>
            Held this season by <strong>{house.shortName}</strong>.
          </p>
        )}
        <ApiHouseBlock house={apiHouse} source={source} />
        {present.length > 0 && (
          <PeopleList title="Present this season" names={present.map((person) => person.name)} />
        )}
      </aside>
    )
  }

  if (selection.kind === 'location') {
    const place = locationById[selection.id]
    if (!place) return null
    const present = peopleHere(season, place.id)
    return (
      <aside className="panel">
        <PanelHead
          eyebrow={`${place.kind} · ${regionById[place.regionId]?.properties.name ?? ''}`}
          title={place.name}
          onClose={() => setSelection(null)}
        />
        <p>{place.lore}</p>
        {house && (
          <p>
            The surrounding land answers to <strong>{house.shortName}</strong> in season {season}.
          </p>
        )}
        <ApiHouseBlock house={apiHouse} source={source} />
        {present.length > 0 && (
          <PeopleList title="Present this season" names={present.map((person) => person.name)} />
        )}
      </aside>
    )
  }

  if (selection.kind === 'house') {
    const selectedHouse = houseById[selection.id]
    if (!selectedHouse) return null
    return (
      <aside className="panel">
        <PanelHead
          eyebrow="Great house"
          title={selectedHouse.name}
          onClose={() => setSelection(null)}
        />
        <div className="banner-row" dangerouslySetInnerHTML={{ __html: bannerSvg(selectedHouse.id) }} />
        <p className="words">{selectedHouse.words}</p>
        <p>{selectedHouse.lore}</p>
        <ApiHouseBlock house={apiHouse} source={source} />
      </aside>
    )
  }

  if (selection.kind === 'battle') {
    const battle = battles.find((item) => item.id === selection.id)
    if (!battle) return null
    const place = locationById[battle.locationId]
    return (
      <aside className="panel">
        <PanelHead
          eyebrow={`Battle · Season ${battle.season}`}
          title={battle.name}
          onClose={() => setSelection(null)}
        />
        <p>{battle.lore}</p>
        <p>
          <strong>Where:</strong> {place?.name ?? 'Unknown'}
        </p>
        <p>
          <strong>Factions:</strong> {battle.factions.join(', ')}
        </p>
        <p>
          <strong>Outcome:</strong> {battle.outcome}
        </p>
      </aside>
    )
  }

  const character = characterById[selection.id]
  if (!character) return null
  const pin = presenceBySeason[season].find((item) => item.characterId === selection.id)
  const here = pin ? locationById[pin.locationId] : undefined
  const image = portrait?.imageUrl ?? character.portrait

  return (
    <aside className="panel">
      <PanelHead
        eyebrow={house?.shortName ?? 'Wanderer'}
        title={character.name}
        onClose={() => setSelection(null)}
      />
      {image && <img className="portrait" src={image} alt={character.name} />}
      <p>{character.lore}</p>
      <p>
        {here
          ? `Primary presence in season ${season}: ${here.name}.`
          : `Not on the board in season ${season}.`}
      </p>
      {apiCharacter && (
        <div className="api-block">
          <p className="eyebrow">From An API of Ice and Fire</p>
          {apiCharacter.titles.filter(Boolean).length > 0 && (
            <p>
              <strong>Titles:</strong> {apiCharacter.titles.filter(Boolean).join(', ')}
            </p>
          )}
          {apiCharacter.aliases.filter(Boolean).length > 0 && (
            <p>
              <strong>Aliases:</strong> {apiCharacter.aliases.filter(Boolean).slice(0, 5).join(', ')}
            </p>
          )}
          {apiCharacter.born && (
            <p>
              <strong>Born:</strong> {apiCharacter.born}
            </p>
          )}
          {apiCharacter.playedBy[0] && (
            <p>
              <strong>Played by:</strong> {apiCharacter.playedBy[0]}
            </p>
          )}
        </div>
      )}
    </aside>
  )
}

function ApiHouseBlock({
  house,
  source,
}: {
  house: IceAndFireHouse | null
  source: 'live' | 'cache' | null
}) {
  if (!house) return null
  return (
    <div className="api-block">
      <p className="eyebrow">
        {source === 'live' ? 'Live from An API of Ice and Fire' : 'Cached Ice and Fire record'}
      </p>
      {house.words && (
        <p>
          <strong>Words:</strong> {house.words}
        </p>
      )}
      {house.coatOfArms && (
        <p>
          <strong>Arms:</strong> {house.coatOfArms}
        </p>
      )}
      {house.seats.filter(Boolean).length > 0 && (
        <p>
          <strong>Seats:</strong> {house.seats.join(', ')}
        </p>
      )}
      {house.titles.filter(Boolean).length > 0 && (
        <p>
          <strong>Titles:</strong> {house.titles.join(', ')}
        </p>
      )}
    </div>
  )
}

function PanelHead({
  eyebrow,
  title,
  onClose,
}: {
  eyebrow: string
  title: string
  onClose: () => void
}) {
  return (
    <div className="panel-head">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <button className="close" type="button" onClick={onClose}>
        Close
      </button>
    </div>
  )
}

function PeopleList({ title, names }: { title: string; names: string[] }) {
  return (
    <div className="people">
      <p className="eyebrow">{title}</p>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )
}
