import { useEffect } from 'react'
import { houseWords, oaths, prophecies, quotes } from '../data/voice.ts'
import { SiteNav } from '../ui/SiteNav.tsx'

const great = houseWords.filter((item) => item.great)
const lesser = houseWords.filter((item) => !item.great)

function wordsIdFromHash(): string {
  const path = window.location.hash.replace(/^#/, '').replace(/^\/+|\/+$/g, '')
  const parts = path.split('/')
  if ((parts[0] === 'words' || parts[0] === 'voice') && parts[1]) return parts[1]
  return ''
}

export function WordsPage() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

  useEffect(() => {
    const scrollTo = () => {
      const id = wordsIdFromHash()
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
    <div className="words">
      <SiteNav current="words" />

      <section className="words-hero">
        <img src={asset('words/weirwood.jpg')} alt="" className="words-hero-art" />
        <div className="words-hero-veil" />
        <div className="words-hero-copy">
          <p className="eyebrow">Ink, ice, and fire</p>
          <h1>The Words</h1>
          <p className="words-lede">
            House words. The lines that outlived their speakers. Oaths sworn in sept and godswood.
            Prophecies that have not yet finished paying.
          </p>
          <nav className="words-index" aria-label="Chapters">
            <a href="#/words/houses">Words</a>
            <a href="#/words/voices">Voices</a>
            <a href="#/words/oaths">Oaths</a>
            <a href="#/words/prophecies">Prophecies</a>
          </nav>
        </div>
      </section>

      <section className="words-chapter" id="houses">
        <div className="words-chapter-head">
          <img src={asset('words/parchment.jpg')} alt="" />
          <div>
            <p className="eyebrow">The houses</p>
            <h2>Every noble house had its words</h2>
            <p>
              Family mottoes, touchstones, prayers of sorts. They boasted of honor and glory, promised
              loyalty and truth, swore faith and courage. — Catelyn Stark, A Game of Thrones
            </p>
          </div>
        </div>
        <div className="words-great">
          {great.map((item) => (
            <article key={item.house} className="words-poster">
              <p className="words-kicker">{item.house}</p>
              <blockquote>{item.words}</blockquote>
              <p className="words-note">{item.note}</p>
            </article>
          ))}
        </div>
        <div className="words-lesser-wrap">
          <p className="eyebrow">The rest of the parchment</p>
          <p className="words-lesser-lede">
            Official words from the books and the Citadel’s heraldry. Houses known only from the
            video games are left off. Frey’s “We Stand Together” is unconfirmed, so it is not here.
          </p>
          <ul className="words-lesser">
            {lesser.map((item) => (
              <li key={item.house}>
                <strong>{item.words}</strong>
                <span>{item.house}</span>
                <em>{item.note}</em>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="words-chapter" id="voices">
        <div className="words-chapter-head">
          <img src={asset('words/ravens.jpg')} alt="" />
          <div>
            <p className="eyebrow">The voices</p>
            <h2>The moment they mattered</h2>
            <p>Spoken once, and then forever. Show lines are marked. The rest are the books.</p>
          </div>
        </div>
        <div className="words-voices">
          {quotes.map((line) => (
            <article key={line.id} className="words-voice">
              <blockquote>{line.text}</blockquote>
              <cite>{line.speaker}</cite>
              <p className="words-note">{line.moment}</p>
              <p className="words-source">{line.source}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="words-chapter words-chapter-oaths" id="oaths">
        <div className="words-chapter-head">
          <img src={asset('words/wall.jpg')} alt="" />
          <div>
            <p className="eyebrow">The oaths</p>
            <h2>Sworn in full</h2>
            <p>The Watch, the drowning, the knight, the cloak, the seven, the Many-Faced God.</p>
          </div>
        </div>
        {oaths.map((oath) => (
          <article key={oath.id} className="words-oath">
            <p className="words-kicker">{oath.title}</p>
            <blockquote>{oath.body}</blockquote>
            <cite>{oath.spokenBy}</cite>
            <p className="words-note">{oath.moment}</p>
            <p className="words-source">{oath.source}</p>
          </article>
        ))}
      </section>

      <section className="words-chapter" id="prophecies">
        <div className="words-chapter-head">
          <img src={asset('words/comet.jpg')} alt="" />
          <div>
            <p className="eyebrow">The prophecies</p>
            <h2>Salt, smoke, and a bleeding star</h2>
            <p>
              None of these have finished paying. The show closed some doors. The books have not.
            </p>
          </div>
        </div>
        <div className="words-prophecies">
          {prophecies.map((item) => (
            <article key={item.id} className="words-prophecy">
              <p className="words-kicker">{item.title}</p>
              <blockquote>{item.text}</blockquote>
              <cite>{item.speaker}</cite>
              <p className="words-note">{item.moment}</p>
              <p className="words-source">{item.source}</p>
            </article>
          ))}
        </div>
        <figure className="words-close">
          <img src={asset('words/heart-tree.jpg')} alt="" />
          <figcaption>
            The old gods have no words. They have faces, and they listen.
          </figcaption>
        </figure>
      </section>

      <footer className="landing-foot">
        Fan work. Book text where it exists; show wording marked. Not affiliated with HBO or George R. R. Martin.
      </footer>
    </div>
  )
}
