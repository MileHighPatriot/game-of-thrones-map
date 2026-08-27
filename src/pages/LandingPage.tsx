import { useEffect, useRef, useState } from 'react'
import { houses } from '../data/houses.ts'
import { hrefFor } from '../lib/hashRoute.ts'
import { attachTheme, HALL_VOLUME, startTheme, stopTheme } from '../lib/theme.ts'
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
    href: 'atlas' as const,
  },
  {
    title: 'The Armory',
    copy: 'Ice, Longclaw, Dawn, and the hammer that killed a prince. Named steel, named hands.',
    image: 'weapons/ice.jpg',
    alt: 'Ice',
    href: 'armory' as const,
  },
  {
    title: 'The Keeps',
    copy: 'Who raised the stone, who sat it, and what was done in the halls.',
    image: 'seats/winterfell.jpg',
    alt: 'Winterfell',
    href: 'keeps' as const,
  },
  {
    title: 'The Hall of Heroes',
    copy: 'Knights, sellswords, and the unexpected blades. A maester’s register of the realm’s famous steel.',
    image: 'heroes/hero.jpg',
    alt: 'A hall of faded banners',
    href: 'heroes' as const,
  },
  {
    title: 'The Words',
    copy: 'House words, oaths, prophecies, and the lines that outlived the people who said them.',
    image: 'words/weirwood.jpg',
    alt: 'A weirwood',
    href: 'words' as const,
  },
  {
    title: 'The True North',
    copy: 'Beyond the Wall the maps grow thin. Free Folk, cold ones, and the reason the ice was raised.',
    image: 'north/hero.jpg',
    alt: 'The True North',
    href: 'north' as const,
  },
  {
    title: 'The Rebellion',
    copy: 'The war that made a king. From Duskendale to the Trident, the tower, and the lie that followed.',
    image: 'roberts/hero.jpg',
    alt: 'The Rebellion',
    href: 'roberts' as const,
  },
]

const courtHouses = COURT.map((id) => houses.find((house) => house.id === id)).filter(
  (house): house is (typeof houses)[number] => Boolean(house),
)

function HallMusic() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const node = audioRef.current
    if (!node) return
    attachTheme(node)
    node.volume = HALL_VOLUME
    node.muted = false
    const kick = () => {
      node.muted = false
      startTheme()
        .then(() => setOn(true))
        .catch(() => setOn(false))
    }
    window.addEventListener('pointerdown', kick, { once: true })
    window.addEventListener('keydown', kick, { once: true })
    return () => {
      window.removeEventListener('pointerdown', kick)
      window.removeEventListener('keydown', kick)
    }
  }, [])

  return (
    <div className="landing-music-dock" onPointerDown={(event) => event.stopPropagation()}>
      <audio
        ref={audioRef}
        className="landing-player"
        src={`${import.meta.env.BASE_URL}landing/rains-of-castamere.wav`}
        loop
        controls
        preload="auto"
        playsInline
        onPlay={() => setOn(true)}
        onPause={() => {
          const node = audioRef.current
          if (node && node.ended) return
          setOn(false)
        }}
        onEnded={() => {
          const node = audioRef.current
          if (!node) return
          node.currentTime = 0
          void node.play()
          setOn(true)
        }}
      />
      <button
        type="button"
        className={`landing-music${on ? ' is-on' : ''}`}
        onClick={(event) => {
          event.stopPropagation()
          const node = audioRef.current
          if (node) node.muted = false
          if (on) {
            stopTheme()
            setOn(false)
          } else {
            startTheme().then(() => setOn(true)).catch(() => setOn(false))
          }
        }}
        aria-pressed={on}
        aria-label={on ? 'Mute The Rains of Castamere' : 'Play The Rains of Castamere'}
        title="The Rains of Castamere"
      >
        {on ? 'The rains play' : 'Play the rains'}
      </button>
    </div>
  )
}

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
        <HallMusic />
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
            <a key={door.title} className="landing-door" href={hrefFor(door.href)}>
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
