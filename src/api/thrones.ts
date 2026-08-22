import type { ThronesPortrait } from '../types.ts'

export async function fetchPortrait(id: number): Promise<ThronesPortrait | null> {
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
