import { useEffect } from 'react'
import {
  coldOnes,
  northClans,
  northFigures,
  northPlaces,
  wallFromNorth,
  whyTheWall,
} from '../data/north.ts'
import { atlasHref } from '../lib/hashRoute.ts'
import { SiteNav } from '../ui/SiteNav.tsx'

function northIdFromHash(): string {
  const path = window.location.hash.replace(/^#/, '').replace(/^\/+|\/+$/g, '')
  const parts = path.split('/')
  if ((parts[0] === 'north' || parts[0] === 'true-north' || parts[0] === 'beyond') && parts[1]) {
    return parts[1]
  }
  return ''
}

function AtlasLink({ locationId, season }: { locationId: string; season?: number }) {
  return (
    <a className="north-atlas" href={atlasHref(locationId, season)}>
      Show on Atlas
    </a>
  )
}

export function TrueNorthPage() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

  useEffect(() => {
    const scrollTo = () => {
      const id = northIdFromHash()
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
    <div className="north">
      <SiteNav current="north" />

      <section className="north-hero">
        <img src={asset('north/hero.jpg')} alt="" className="north-hero-art" />
        <div className="north-hero-veil" />
        <div className="north-hero-copy">
          <p className="eyebrow">Beyond the Wall</p>
          <h1>The True North</h1>
          <p className="north-lede">
            Colder than the halls. Thinner than the maps. An archive of the Free Folk, the cold ones,
            and the ice that was poured to forget them.
          </p>
          <nav className="north-index" aria-label="Chapters">
            <a href="#/north/why">Why the Wall</a>
            <a href="#/north/places">Places</a>
            <a href="#/north/folk">Free Folk</a>
            <a href="#/north/cold">The Cold Ones</a>
            <a href="#/north/wall">The Wall from the North</a>
          </nav>
        </div>
      </section>

      <section className="north-scroll" id="why">
        <figure className="north-scroll-art">
          <img src={asset(whyTheWall.image)} alt="The Long Night" />
        </figure>
        <div className="north-scroll-copy">
          <p className="eyebrow">{whyTheWall.kicker}</p>
          <h2>{whyTheWall.title}</h2>
          <p className="north-scroll-lede">{whyTheWall.lede}</p>
          {whyTheWall.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          <AtlasLink locationId={whyTheWall.locationId} />
        </div>
      </section>

      <section className="north-chapter" id="places">
        <header className="north-chapter-head">
          <p className="eyebrow">Places of the Far North</p>
          <h2>The maps grow thin</h2>
          <p>
            Illustrated dossiers for the ground beyond the Gift. What the place feels like, what was
            done there, and where it sits on the atlas.
          </p>
        </header>
        <div className="north-grid">
          {northPlaces.map((place) => (
            <article
              key={place.id}
              id={place.id}
              className={`north-card${place.far ? ' is-far' : ''}`}
            >
              <img src={asset(place.image)} alt={place.name} />
              <div className="north-copy">
                <p className="eyebrow">{place.region}</p>
                <h3>{place.name}</h3>
                <dl>
                  <div>
                    <dt>The place</dt>
                    <dd>{place.atmosphere}</dd>
                  </div>
                  <div>
                    <dt>What happened here</dt>
                    <dd>{place.happened}</dd>
                  </div>
                </dl>
                <AtlasLink locationId={place.locationId} season={place.season} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="north-chapter" id="folk">
        <header className="north-chapter-head">
          <p className="eyebrow">The Free Folk</p>
          <h2>Not one people</h2>
          <p>
            The south says wildlings and thinks it has finished the sentence. A hundred clans live
            north of the ice. They do not kneel. They do not agree. They ran south because the true
            enemy does not care what you call yourself.
          </p>
        </header>
        <div className="north-grid north-grid-clans">
          {northClans.map((clan) => (
            <article key={clan.id} id={clan.id} className="north-card north-card-clan">
              <img src={asset(clan.image)} alt={clan.name} />
              <div className="north-copy">
                <p className="eyebrow">A people of the True North</p>
                <h3>{clan.name}</h3>
                <dl>
                  <div>
                    <dt>Customs</dt>
                    <dd>{clan.customs}</dd>
                  </div>
                  <div>
                    <dt>The Wall, as they see it</dt>
                    <dd>{clan.wall}</dd>
                  </div>
                </dl>
                <AtlasLink locationId={clan.locationId} />
              </div>
            </article>
          ))}
        </div>

        <div className="north-figures-head">
          <p className="eyebrow">Notable figures</p>
          <h3>Names the ice did not take</h3>
        </div>
        <div className="north-figures">
          {northFigures.map((figure) => (
            <article key={figure.id} id={figure.id} className="north-figure">
              <img src={asset(figure.image)} alt={figure.name} />
              <div className="north-copy">
                <p className="eyebrow">{figure.title}</p>
                <h3>{figure.name}</h3>
                <p>{figure.lore}</p>
                <AtlasLink locationId={figure.locationId} season={figure.season} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="north-chapter north-chapter-cold" id="cold">
        <header className="north-chapter-head">
          <p className="eyebrow">The Cold Ones</p>
          <h2>Known, and only whispered</h2>
          <p>
            The further north the parchment goes, the more it admits what it does not have. These
            are not houses. They are the reason houses learned to fear winter.
          </p>
        </header>
        <div className="north-grid">
          {coldOnes.map((item) => (
            <article key={item.id} id={item.id} className="north-card north-card-cold">
              <img src={asset(item.image)} alt={item.name} />
              <div className="north-copy">
                <p className="eyebrow">The true enemy</p>
                <h3>{item.name}</h3>
                <dl>
                  <div>
                    <dt>What is known</dt>
                    <dd>{item.known}</dd>
                  </div>
                  <div>
                    <dt>What is whispered</dt>
                    <dd className="is-whisper">{item.whispered}</dd>
                  </div>
                </dl>
                <AtlasLink locationId={item.locationId} season={item.season} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="north-chapter north-chapter-wall" id="wall">
        <header className="north-chapter-head">
          <p className="eyebrow">The Wall from the North</p>
          <h2>A cliff that learned to say no</h2>
        </header>
        <article className="north-wall">
          <img src={asset(wallFromNorth.image)} alt="The Wall from the north" />
          <div className="north-copy">
            <p className="north-scroll-lede">{wallFromNorth.lede}</p>
            {wallFromNorth.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
            <AtlasLink locationId={wallFromNorth.locationId} />
          </div>
          <div className="north-wall-pair">
            <figure>
              <img src={asset(wallFromNorth.abandoned)} alt="Abandoned castles of the Night’s Watch" />
              <figcaption>The unmanned keeps. Names the Watch still recites.</figcaption>
            </figure>
            <figure>
              <img src={asset(wallFromNorth.gate)} alt="A gate through the Wall" />
              <figcaption>A tunnel through ice. The Free Folk’s door, when a door is offered.</figcaption>
            </figure>
          </div>
        </article>
      </section>

      <footer className="landing-foot">
        Fan work. Show canon, with book notes where the show is silent. Not affiliated with HBO or
        George R. R. Martin.
      </footer>
    </div>
  )
}
