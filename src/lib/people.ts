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
    'tywin',
    'robb',
    'catelyn',
    'theon',
    'stannis',
    'nightking',
    'brienne',
    'davos',
    'littlefinger',
    'varys',
    'sam',
    'hound',
    'margaery',
    'olenna',
    'jorah',
    'melisandre',
    'joffrey',
    'ramsay',
    'robert',
    'drogo',
    'tormund',
    'greyworm',
    'missandei',
    'bronn',
    'ygritte',
    'gendry',
    'oberyn',
    'barristan',
    'sparrow',
    'jeor',
    'euron',
    'yara',
    'roose',
    'qyburn',
    'daario',
    'gilly',
  ].map((id, index) => [id, index]),
)

const SHORT: Record<string, string> = {
  nightking: 'Night King',
  greyworm: 'Grey Worm',
  littlefinger: 'Littlefinger',
  hound: 'The Hound',
  sparrow: 'Sparrow',
}

const INITIALS: Record<string, string> = {
  nightking: 'NK',
  greyworm: 'GW',
  littlefinger: 'LF',
  hound: 'SC',
  sparrow: 'HS',
}

export function firstName(name: string): string {
  const stripped = name.replace(/^The /, '')
  return stripped.split(' ')[0] ?? name
}

export function displayName(character: Character): string {
  return SHORT[character.id] ?? firstName(character.name)
}

export function initials(name: string): string {
  return name
    .replace(/^The /, '')
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
}

export function pinInitials(character: Character): string {
  return INITIALS[character.id] ?? initials(character.name)
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
  sam: 'samwell',
  ramsey: 'ramsay',
  ramsay: 'ramsay',
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
  const fallback = escapeHtml(pinInitials(character))
  const img = character.portrait
    ? `<img src="${character.portrait}" alt="" onerror="this.style.display='none'" />`
    : ''
  return `<span class="pin-char ${extraClass}" style="box-shadow:0 0 0 2px ${color},0 4px 12px rgba(0,0,0,.5)">${img}<span class="pin-char-fallback">${fallback}</span></span>`
}

export function clusterHtml(
  people: Character[],
  placeName: string,
  selectedId: string | null,
  compact = false,
): string {
  const faces = people.slice(0, compact ? 1 : 3)
  const count = people.length
  const selected = selectedId ? people.some((person) => person.id === selectedId) : false
  const faceMarkup = faces
    .map((person) => faceHtml(person, person.id === selectedId ? 'is-selected' : ''))
    .join('')
  const countMarkup = count > 1 ? `<span class="presence-count">${count}</span>` : ''
  if (compact) {
    return `<div class="presence-cluster is-compact${selected ? ' is-lit' : ''}"><div class="presence-faces">${faceMarkup}${countMarkup}</div></div>`
  }
  const label =
    count === 1
      ? `${escapeHtml(people[0] ? displayName(people[0]) : '')}<em>${escapeHtml(placeName)}</em>`
      : escapeHtml(placeName)
  return `<div class="presence-cluster${selected ? ' is-lit' : ''}"><div class="presence-faces">${faceMarkup}${countMarkup}</div><span class="presence-place">${label}</span></div>`
}

export function personHtml(character: Character, selected: boolean): string {
  return `<div class="presence-person${selected ? ' is-selected' : ''}">${faceHtml(character, selected ? 'is-selected' : '')}<span class="presence-name">${escapeHtml(displayName(character))}</span></div>`
}
