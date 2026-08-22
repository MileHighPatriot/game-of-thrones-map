import { SEASON_META } from '../data/seasons.ts'
import { useAtlas } from '../state/AtlasContext.tsx'
import type { Season } from '../types.ts'

const seasons: Season[] = [1, 2, 3, 4, 5, 6, 7, 8]

export function SeasonSlider() {
  const { season, setSeason } = useAtlas()
  const meta = SEASON_META[season]

  return (
    <div className="chrome slider">
      <div className="slider-head">
        <strong>{meta.title}</strong>
        <span>{meta.caption}</span>
      </div>
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
            S{value}
          </button>
        ))}
      </div>
    </div>
  )
}
