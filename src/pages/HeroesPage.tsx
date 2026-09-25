import { heroes } from '../data/heroes.ts'
import { atlasHref } from '../lib/hashRoute.ts'
import { heroImg, lazyImg, PORTRAIT } from '../lib/img.ts'
import { useHashScroll } from '../lib/useHashScroll.ts'
import { MAIN_ID, SiteNav } from '../ui/SiteNav.tsx'

export function HeroesPage() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

  useHashScroll('heroes')

  return (
    <div className="heroes">
      <SiteNav current="heroes" />
      <main id={MAIN_ID} tabIndex={-1}>
        <section className="room-hero">
          <img src={asset('heroes/got/hero.jpg')} alt="" className="room-hero-art" {...heroImg()} />
          <div className="room-hero-veil" />
          <div className="room-hero-copy">
            <p className="eyebrow">A maester’s register of steel</p>
            <h1>The Hall of Heroes</h1>
            <p className="room-lede">
              Famous knights, unexpected blades, and the men and women who earned a page by skill,
              courage, or the damage they left. The white book is kinder than the world was.
            </p>
            <nav className="room-index" aria-label="Warriors">
              {heroes.map((hero) => (
                <a key={hero.id} href={`#/heroes/${hero.id}`}>
                  {hero.name}
                </a>
              ))}
            </nav>
          </div>
        </section>
        <div className="heroes-grid">
          {heroes.map((hero) => (
            <article key={hero.id} id={hero.id} className="hero-card">
              <img src={`${asset(hero.image)}?v=got`} alt={hero.name} {...lazyImg(PORTRAIT)} />
              <div className="hero-copy">
                <p className="eyebrow">{hero.epithet}</p>
                <h2>{hero.name}</h2>
                <p className="hero-house">{hero.house}</p>
                <dl>
                  <div>
                    <dt>The record</dt>
                    <dd>{hero.backstory}</dd>
                  </div>
                  <div>
                    <dt>Steel</dt>
                    <dd>{hero.steel}</dd>
                  </div>
                  <div>
                    <dt>Deeds</dt>
                    <dd>{hero.deeds}</dd>
                  </div>
                  <div>
                    <dt>The field</dt>
                    <dd>{hero.battles}</dd>
                  </div>
                  <div>
                    <dt>What remains</dt>
                    <dd>{hero.fate}</dd>
                  </div>
                  <div>
                    <dt>Bonds</dt>
                    <dd>{hero.ties}</dd>
                  </div>
                </dl>
                <a className="room-atlas" href={atlasHref(hero.locationId)}>
                  Show on Atlas
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
      <footer className="landing-foot">
        Fan work. Show canon, with book notes where the show is silent. Not affiliated with HBO or George R. R. Martin.
      </footer>
    </div>
  )
}
