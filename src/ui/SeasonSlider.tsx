import { useEffect } from 'react'
import { SEASON_META } from '../data/seasons.ts'
import { useAtlas } from '../state/AtlasContext.tsx'
import type { Season } from '../types.ts'

const seasons: Season[] = [1, 2, 3, 4, 5, 6, 7, 8]

export function SeasonSlider() {
  const { season, setSeason, selection, playing, setPlaying } = useAtlas()
  const meta = SEASON_META[season]

  useEffect(() => {
    if (!playing) return
    if (season === 8) {
      setPlaying(false)
      return
    }
    const timer = window.setTimeout(() => {
      setSeason((season + 1) as Season)
    }, 1800)
    return () => window.clearTimeout(timer)
  }, [playing, season, setPlaying, setSeason])

  return (
    <footer className="season-dock">
      <div className="season-copy">
        <strong>{meta.title}</strong>
        <span>{meta.caption}</span>
        {!selection && <em>Portraits mark who stands where. Click a group to fan them out.</em>}
      </div>
      <div className="season-controls">
        <input
          type="range"
          min={1}
          max={8}
          step={1}
          value={season}
          aria-label="Season"
          onChange={(event) => {
            setPlaying(false)
            setSeason(Number(event.target.value) as Season)
          }}
        />
        <div className="season-ticks">
          <button
            type="button"
            className={`season-play${playing ? ' active' : ''}`}
            aria-label={playing ? 'Pause season playback' : 'Play seasons'}
            aria-pressed={playing}
            onClick={() => {
              if (playing) {
                setPlaying(false)
                return
              }
              if (season === 8) setSeason(1)
              setPlaying(true)
            }}
          >
            {playing ? '❚❚' : '▶'}
          </button>
          {seasons.map((value) => (
            <button
              key={value}
              type="button"
              className={value === season ? 'active' : ''}
              onClick={() => {
                setPlaying(false)
                setSeason(value)
              }}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </footer>
  )
}
