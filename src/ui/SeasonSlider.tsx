import { SEASON_META } from '../data/seasons.ts'
import { useAtlas } from '../state/AtlasContext.tsx'
import type { Season } from '../types.ts'

const seasons: Season[] = [1, 2, 3, 4, 5, 6, 7, 8]

export function SeasonSlider() {
  const { season, setSeason, selection } = useAtlas()
  const meta = SEASON_META[season]

  return (
    <footer className="season-dock">
      <div className="season-copy">
        <strong>{meta.title}</strong>
        <span>{meta.caption}</span>
        {!selection && <em>Click a banner, battle, or named place.</em>}
      </div>
      <div className="season-controls">
        <input
          type="range"
          min={1}
          max={8}
          step={1}
          value={season}
          aria-label="Season"
          onChange={(event) => setSeason(Number(event.target.value) as Season)}
        />
        <div className="season-ticks">
          {seasons.map((value) => (
            <button
              key={value}
              type="button"
              className={value === season ? 'active' : ''}
              onClick={() => setSeason(value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </footer>
  )
}
