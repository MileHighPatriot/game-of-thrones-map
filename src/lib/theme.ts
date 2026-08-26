let el: HTMLAudioElement | null = null

export const HALL_VOLUME = 0.4

function rainsSrc() {
  return `${import.meta.env.BASE_URL}landing/rains.wav`
}

function bind(node: HTMLAudioElement) {
  el = node
  el.loop = true
  el.preload = 'auto'
  el.muted = false
  el.volume = HALL_VOLUME
}

export function attachTheme(node: HTMLAudioElement) {
  bind(node)
}

export async function startTheme() {
  if (!el) {
    const node = new Audio(rainsSrc())
    node.setAttribute('playsinline', 'true')
    bind(node)
  }
  const node = el
  if (!node) return
  node.muted = false
  await node.play()
}

export function stopTheme() {
  el?.pause()
}

export function themePlaying() {
  return Boolean(el && !el.paused)
}
