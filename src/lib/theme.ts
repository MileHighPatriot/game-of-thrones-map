let el: HTMLAudioElement | null = null
let looping = false

export const HALL_VOLUME = 0.4

function rainsSrc() {
  return `${import.meta.env.BASE_URL}landing/rains-of-castamere.wav`
}

function restart() {
  if (!el || !looping) return
  el.currentTime = 0
  void el.play()
}

function bind(node: HTMLAudioElement) {
  el = node
  el.loop = true
  el.preload = 'auto'
  el.muted = false
  el.volume = HALL_VOLUME
  if (node.dataset.loopBound === '1') return
  node.dataset.loopBound = '1'
  node.addEventListener('ended', restart)
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
  node.loop = true
  node.muted = false
  looping = true
  await node.play()
}

export function stopTheme() {
  looping = false
  el?.pause()
}

export function themePlaying() {
  return Boolean(el && !el.paused)
}
