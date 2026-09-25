import { characterCache, houseCache } from '../data/iceAndFireCache.ts'
import type { IceAndFireCharacter, IceAndFireHouse } from '../types.ts'

const BASE = 'https://www.anapioficeandfire.com/api'

async function getJson<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url)
    if (!response.ok) return null
    return (await response.json()) as T
  } catch {
    return null
  }
}

export type ApiResult<T> = { data: T; live: boolean }

/**
 * One request per record per visit: reopening a panel reuses the answer already in hand.
 * A miss or an offline fallback is forgotten, so the next open tries the network again.
 */
function remembered<T>(
  store: Map<number, Promise<ApiResult<T> | null>>,
  id: number,
  load: () => Promise<ApiResult<T> | null>,
): Promise<ApiResult<T> | null> {
  const known = store.get(id)
  if (known) return known
  const pending = load().then((result) => {
    if (!result?.live) store.delete(id)
    return result
  })
  store.set(id, pending)
  return pending
}

const houses = new Map<number, Promise<ApiResult<IceAndFireHouse> | null>>()
const characters = new Map<number, Promise<ApiResult<IceAndFireCharacter> | null>>()

export function fetchHouse(id: number): Promise<ApiResult<IceAndFireHouse> | null> {
  return remembered(houses, id, async () => {
    const live = await getJson<IceAndFireHouse>(`${BASE}/houses/${id}`)
    if (live) return { data: live, live: true }
    const cached = houseCache[id]
    return cached ? { data: cached, live: false } : null
  })
}

export function fetchCharacter(id: number): Promise<ApiResult<IceAndFireCharacter> | null> {
  return remembered(characters, id, async () => {
    const live = await getJson<IceAndFireCharacter>(`${BASE}/characters/${id}`)
    if (live) return { data: live, live: true }
    const cached = characterCache[id]
    return cached ? { data: cached, live: false } : null
  })
}
