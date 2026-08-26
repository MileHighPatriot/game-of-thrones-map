let el: HTMLAudioElement | null = null

function rainsSrc() {
  return `${import.meta.env.BASE_URL}landing/rains.wav`
}

function bind(node: HTMLAudioElement) {
  el = node
  el.loop = true
  el.preload = 'auto'
  el.muted = false
  el.volume = 1
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
  node.volume = 1
  await node.play()
}

export function stopTheme() {
  el?.pause()
}

export function themePlaying() {
  return Boolean(el && !el.paused)
}
