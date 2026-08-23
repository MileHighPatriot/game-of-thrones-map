import { houseById } from '../data/houses.ts'
import type { Character } from '../types.ts'

const RANK: Record<string, number> = Object.fromEntries(
  [
    'daenerys',
    'jon',
    'ned',
    'cersei',
    'tyrion',
    'arya',
    'sansa',
    'jaime',
    'bran',
    'robb',
    'catelyn',
    'theon',
    'stannis',
    'nightking',
    'brienne',
    'davos',
    'jorah',
    'melisandre',
  ].map((id, index) => [id, index]),
)

export function firstName(name: string): string {
  return name.split(' ')[0] ?? name
}

export function initials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
}

export function compareCharacters(a: Character, b: Character): number {
  return (RANK[a.id] ?? 50) - (RANK[b.id] ?? 50)
}

export function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

const GIVEN_NAMES: Record<string, string> = {
  bran: 'brandon',
  ned: 'eddard',
  jamie: 'jaime',
  cat: 'catelyn',
  dany: 'daenerys',
  petyr: 'petyr',
}

export function samePerson(apiName: string, localName: string): boolean {
  const norm = (value: string) => value.toLowerCase().replace(/[^a-z]+/g, ' ').trim()
  const api = norm(apiName)
  const local = norm(localName)
  if (api === local) return true
  const canon = (name: string) => {
    const first = name.split(' ')[0] ?? name
    return GIVEN_NAMES[first] ?? first
  }
  return canon(api) === canon(local)
}

export function characterMatchesQuery(character: Character, needle: string): boolean {
  if (character.name.toLowerCase().includes(needle)) return true
  if (character.lore.toLowerCase().includes(needle)) return true
  return character.aliases.some((alias) => alias.toLowerCase().includes(needle))
}

export function houseColor(character: Character): string {
  if (!character.houseId) return '#d4b43c'
  return houseById[character.houseId]?.color ?? '#d4b43c'
}

export function faceHtml(character: Character, extraClass = ''): string {
  const color = houseColor(character)
  const fallback = escapeHtml(initials(character.name))
  const img = character.portrait
    ? `<img src="${character.portrait}" alt="" onerror="this.style.display='none'" />`
    : ''
  return `<span class="pin-char ${extraClass}" style="box-shadow:0 0 0 2px ${color},0 4px 12px rgba(0,0,0,.5)">${img}<span class="pin-char-fallback">${fallback}</span></span>`
}

export function clusterHtml(people: Character[], placeName: string, selectedId: string | null): string {
  const faces = people.slice(0, 3)
  const count = people.length
  const selected = selectedId ? people.some((person) => person.id === selectedId) : false
  const faceMarkup = faces
    .map((person) => faceHtml(person, person.id === selectedId ? 'is-selected' : ''))
    .join('')
  const countMarkup = count > 1 ? `<span class="presence-count">${count}</span>` : ''
  const label =
    count === 1
      ? `${escapeHtml(firstName(people[0]?.name ?? ''))}<em>${escapeHtml(placeName)}</em>`
      : escapeHtml(placeName)
  return `<div class="presence-cluster${selected ? ' is-lit' : ''}"><div class="presence-faces">${faceMarkup}${countMarkup}</div><span class="presence-place">${label}</span></div>`
}

export function personHtml(character: Character, selected: boolean): string {
  return `<div class="presence-person${selected ? ' is-selected' : ''}">${faceHtml(character, selected ? 'is-selected' : '')}<span class="presence-name">${escapeHtml(firstName(character.name))}</span></div>`
}
