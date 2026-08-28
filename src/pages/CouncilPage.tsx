import { useEffect } from 'react'
import {
  councilBenches,
  councilChairs,
  councilChapters,
  councilFaces,
} from '../data/council.ts'
import { atlasHref } from '../lib/hashRoute.ts'
import { SiteNav } from '../ui/SiteNav.tsx'

function councilIdFromHash(): string {
  const path = window.location.hash.replace(/^#/, '').replace(/^\/+|\/+$/g, '')
  const parts = path.split('/')
  if (
    (parts[0] === 'council' || parts[0] === 'small-council' || parts[0] === 'smallcouncil') &&
    parts[1]
  ) {
    return parts[1]
  }
  return ''
}

function AtlasLink({ locationId }: { locationId: string | null }) {
  if (!locationId) return null
  return (
    <a className="room-atlas" href={atlasHref(locationId)}>
      Show on Atlas
    </a>
  )
}

export function CouncilPage() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

  useEffect(() => {
    const scrollTo = () => {
      const id = councilIdFromHash()
      if (!id) return
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    const timer = window.setTimeout(scrollTo, 80)
    window.addEventListener('hashchange', scrollTo)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('hashchange', scrollTo)
    }
  }, [])

  return (
    <div className="council">
      <SiteNav current="council" />

      <section className="room-hero">
        <img src={`${asset('council/got/small-council-guide.jpg')}?v=got`} alt="" className="room-hero-art" />
        <div className="room-hero-veil" />
        <div className="room-hero-copy">
          <p className="eyebrow">The table that rules the realm</p>
          <h1>The Small Council</h1>
          <p className="room-lede">
            Seven chairs, then eight, then whoever the crown could stand. Hands, whisperers, and
            the room where Westeros was actually governed. Show canon, with the books where the
            show is silent.
          </p>
          <nav className="room-index" aria-label="Chapters">
            {councilChapters.map((chapter) => (
              <a key={chapter.id} href={`#/council/${chapter.id}`}>
                {chapter.nav}
              </a>
            ))}
            <a href="#/council/chairs">The Chairs</a>
            <a href="#/council/faces">Who sat</a>
          </nav>
        </div>
      </section>

      {councilChapters.map((chapter, index) => (
        <section
          key={chapter.id}
          id={chapter.id}
          className={`council-scroll${index % 2 === 1 ? ' is-flip' : ''}`}
        >
          <figure className="council-scroll-art">
            <img src={`${asset(chapter.image)}?v=got`} alt="" />
          </figure>
          <div className="council-scroll-copy">
            <p className="eyebrow">{chapter.kicker}</p>
            <h2>{chapter.title}</h2>
            <p className="council-scroll-lede">{chapter.lede}</p>
            {chapter.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <AtlasLink locationId={chapter.locationId} />
          </div>
        </section>
      ))}

      <section className="council-chapter" id="chairs">
        <header className="council-chapter-head">
          <p className="eyebrow">The offices</p>
          <h2>The chairs</h2>
          <p>
            Seven seats to please the Faith, then a war office invented because Cersei needed
            another loyalist. The king names them. The Citadel names the chain. Everyone else
            stays seated as long as they can.
          </p>
        </header>
        <div className="council-place-grid">
          {councilChairs.map((chair) => (
            <article key={chair.id} id={chair.id} className="council-place">
              <img src={asset(chair.image)} alt={chair.name} />
              <div className="council-copy">
                <p className="eyebrow">An office of the table</p>
                <h3>{chair.name}</h3>
                <p className="council-role">{chair.duty}</p>
                <dl>
                  <div>
                    <dt>Who sat it</dt>
                    <dd>{chair.who}</dd>
                  </div>
                  <div>
                    <dt>What remains</dt>
                    <dd>{chair.fate}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="council-chapter" id="faces">
        <header className="council-chapter-head">
          <p className="eyebrow">The people</p>
          <h2>Who sat</h2>
          <p>
            Hands who ran the kingdom, men who counted gold and birds, the old table under Robert,
            and the last one under a broken king. The furniture is older than any of them.
          </p>
        </header>
        {councilBenches.map((bench) => {
          const faces = councilFaces.filter((face) => face.bench === bench)
          return (
            <div key={bench} className="council-side">
              <p className="eyebrow council-side-label">{bench}</p>
              <div className="council-face-grid">
                {faces.map((face) => (
                  <article key={face.id} id={face.id} className="council-face">
                    <img src={`${asset(face.image)}?v=got`} alt={face.name} />
                    <div className="council-copy">
                      <p className="eyebrow">{face.office}</p>
                      <h3>{face.name}</h3>
                      <dl>
                        <div>
                          <dt>At the table</dt>
                          <dd>{face.role}</dd>
                        </div>
                        <div>
                          <dt>What followed</dt>
                          <dd>{face.fate}</dd>
                        </div>
                      </dl>
                      <AtlasLink locationId={face.locationId} />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )
        })}
      </section>

      <footer className="landing-foot">
        Fan work. Show canon, with book notes where the show is silent. Not affiliated with HBO or
        George R. R. Martin.
      </footer>
    </div>
  )
}
