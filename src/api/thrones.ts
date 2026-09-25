import type { ThronesPortrait } from '../types.ts'

/** One request per portrait per visit; a failed one is forgotten so it can be retried. */
const portraits = new Map<number, Promise<ThronesPortrait | null>>()

async function loadPortrait(id: number): Promise<ThronesPortrait | null> {
  try {
    const response = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
    if (!response.ok) return null
    const data = (await response.json()) as {
      id: number
      fullName: string
      title: string
      family: string
      imageUrl: string
    }
    return {
      id: data.id,
      fullName: data.fullName,
      title: data.title,
      family: data.family,
      imageUrl: data.imageUrl,
    }
  } catch {
    return null
  }
}

export function fetchPortrait(id: number): Promise<ThronesPortrait | null> {
  const known = portraits.get(id)
  if (known) return known
  const pending = loadPortrait(id).then((portrait) => {
    if (!portrait) portraits.delete(id)
    return portrait
  })
  portraits.set(id, pending)
  return pending
}
