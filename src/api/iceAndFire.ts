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

export async function fetchHouse(id: number): Promise<ApiResult<IceAndFireHouse> | null> {
  const live = await getJson<IceAndFireHouse>(`${BASE}/houses/${id}`)
  if (live) return { data: live, live: true }
  const cached = houseCache[id]
  return cached ? { data: cached, live: false } : null
}

export async function fetchCharacter(
  id: number,
): Promise<ApiResult<IceAndFireCharacter> | null> {
  const live = await getJson<IceAndFireCharacter>(`${BASE}/characters/${id}`)
  if (live) return { data: live, live: true }
  const cached = characterCache[id]
  return cached ? { data: cached, live: false } : null
}

