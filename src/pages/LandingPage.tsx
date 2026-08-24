import { houses } from '../data/houses.ts'
import { hrefFor } from '../lib/hashRoute.ts'
import { sigilSrc } from '../lib/banners.ts'
import { SiteNav } from '../ui/SiteNav.tsx'

const COURT = ['stark', 'lannister', 'targaryen', 'baratheon', 'greyjoy', 'tyrell', 'martell', 'arryn', 'tully', 'nightswatch'] as const

const WORDS = [
  'Winter Is Coming',
  'Hear Me Roar',
  'Fire and Blood',
  'Ours Is the Fury',
  'We Do Not Sow',
  'Growing Strong',
  'Unbowed, Unbent, Unbroken',
  'As High as Honor',
  'Family, Duty, Honor',
  'Valar Morghulis',
]

const DOORS = [
  {
    title: 'The Atlas',
    copy: 'Eight seasons. One parchment world. Watch who holds the land as the game turns.',
    image: 'seats/kings-landing.jpg',
    alt: 'King’s Landing',
  },
  {
    title: 'The Great Houses',
    copy: 'Banners on the wind. Words, seats, and the colors each realm wears.',
    image: 'seats/winterfell.jpg',
    alt: 'Winterfell',
  },
  {
    title: 'The Travelers',
    copy: 'Find a soul and follow them — from the Wall to the grass sea.',
    image: 'seats/dragonstone.jpg',
    alt: 'Dragonstone',
  },
]

const courtHouses = COURT.map((id) => houses.find((house) => house.id === id)).filter(
  (house): house is (typeof houses)[number] => Boolean(house),
)

export function LandingPage() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`
  const marquee = [...WORDS, ...WORDS]

  return (
    <div className="landing">
      <section className="landing-hero">
        <img
          className="landing-hero-art"
          src={asset('landing/throne-hall.jpg')}
          alt=""
          aria-hidden="true"
        />
        <div className="landing-hero-veil" aria-hidden="true" />
        <SiteNav current="hall" overlay />
        <div className="landing-hero-copy">
          <p className="eyebrow">A fan atlas of the known world</p>
          <h1 className="landing-kicker">Westeros &amp; Essos</h1>
          <img className="landing-filigree" src={asset('landing/filigree.jpg')} alt="" aria-hidden="true" />
          <blockquote className="landing-quote">
            <p>When you play the game of thrones,</p>
            <p>you win or you die.</p>
          </blockquote>
          <cite className="landing-cite">Cersei Lannister</cite>
          <a className="landing-enter" href={hrefFor('atlas')}>
            Enter the Atlas
          </a>
        </div>
        <div className="landing-marquee" aria-hidden="true">
          <div className="landing-marquee-track">
            {marquee.map((words, index) => (
              <span key={`${words}-${index}`}>{words}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-doors" aria-label="Ways into the atlas">
        <p className="eyebrow">Open a door</p>
        <h2>The realm is waiting</h2>
        <div className="landing-doors-grid">
          {DOORS.map((door) => (
            <a key={door.title} className="landing-door" href={hrefFor('atlas')}>
              <img src={asset(door.image)} alt={door.alt} />
              <div className="landing-door-copy">
                <strong>{door.title}</strong>
                <p>{door.copy}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="landing-court" aria-label="Great houses">
        {courtHouses.map((house) => (
          <div key={house.id} className="landing-house">
            <img src={sigilSrc(house.id)} alt="" />
            <strong>{house.shortName}</strong>
            <em>{house.words}</em>
          </div>
        ))}
      </section>

      <footer className="landing-foot">
        Fan work. Show canon. Not affiliated with HBO or George R. R. Martin.
      </footer>
    </div>
  )
}
