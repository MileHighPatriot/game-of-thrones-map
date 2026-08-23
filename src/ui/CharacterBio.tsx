import { useEffect, type CSSProperties, type ReactNode } from 'react'
import { presenceBySeason } from '../data/presence.ts'
import { locationById } from '../data/locations.ts'
import { flyZoomFor } from '../map/zoom.ts'
import { useAtlas } from '../state/AtlasContext.tsx'
import type { Character, Season } from '../types.ts'

const ALL_SEASONS: Season[] = [1, 2, 3, 4, 5, 6, 7, 8]

export function CharacterBio({
  character,
  houseName,
  image,
  apiBlock,
  alsoHere,
}: {
  character: Character
  houseName: string
  image: string | null
  apiBlock: ReactNode
  alsoHere: ReactNode
}) {
  const { season, setSeason, setPlaying, flyTo, setExpandedPresence } = useAtlas()
  const pin = presenceBySeason[season].find((item) => item.characterId === character.id)
  const here = pin ? locationById[pin.locationId] : undefined
  const seasonLore = character.seasons[season]
  const score = Math.max(0, Math.min(100, character.score))

  useEffect(() => {
    if (character.seasons[season]) return
    const first = ALL_SEASONS.find((value) => character.seasons[value])
    if (!first) return
    setPlaying(false)
    setSeason(first)
  }, [character])

  return (
    <>
      {image && <img className="portrait" src={image} alt={character.name} />}
      <p className="bio-tagline">{character.lore}</p>

      <div className="score-card">
        <div className="score-ring" style={{ '--score': score } as CSSProperties}>
          <div className="score-ring-inner">
            <strong>{score}</strong>
            <span>/100</span>
          </div>
        </div>
        <div>
          <p className="eyebrow">Character score</p>
          <p className="score-why">{character.scoreWhy}</p>
        </div>
      </div>

      {character.playedBy && (
        <p className="muted">
          Played by <strong>{character.playedBy}</strong>
        </p>
      )}

      {character.aliases.length > 0 && (
        <p className="bio-aliases">
          <strong>Also known as:</strong> {character.aliases.join(' · ')}
        </p>
      )}

      <section className="bio-section">
        <p className="eyebrow">Backstory</p>
        {character.backstory.split('\n\n').map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </section>

      <section className="bio-section">
        <p className="eyebrow">Accomplishments</p>
        <ul className="bio-list">
          {character.accomplishments.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="bio-section bio-season-block">
        <p className="eyebrow">From season to season</p>
        <div className="bio-season-tabs" role="tablist" aria-label="Character seasons">
          {ALL_SEASONS.map((value) => {
            const hasLore = Boolean(character.seasons[value])
            return (
              <button
                key={value}
                type="button"
                role="tab"
                aria-selected={season === value}
                className={season === value ? 'active' : ''}
                disabled={!hasLore}
                title={hasLore ? `Season ${value}` : `Not in season ${value}`}
                onClick={() => {
                  setPlaying(false)
                  setSeason(value)
                }}
              >
                S{value}
              </button>
            )
          })}
        </div>
        <div className="bio-season-copy">
          <p className="bio-season-kicker">Season {season}</p>
          <p>
            {seasonLore ?? `${character.name} is not on the board in season ${season}.`}
          </p>
          <p className="muted">
            {here
              ? `Primary presence this season: ${here.name}.`
              : `No map pin in season ${season}.`}
          </p>
        </div>
      </section>

      {here && (
        <button
          className="dive"
          type="button"
          onClick={() => {
            setExpandedPresence(here.id)
            flyTo(here.x, here.y, flyZoomFor('character'))
          }}
        >
          See on the map
        </button>
      )}

      {alsoHere}

      {houseName && (
        <p className="muted">
          Sworn to <strong>{houseName}</strong>.
        </p>
      )}

      {apiBlock}
    </>
  )
}
