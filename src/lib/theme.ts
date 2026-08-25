let ctx: AudioContext | null = null
let master: GainNode | null = null
let timer: number | null = null
let playing = false

function context(): AudioContext {
  ctx ??= new AudioContext()
  return ctx
}

function horn(audio: AudioContext, dest: AudioNode, freq: number, at: number, dur: number, gain = 0.07) {
  const osc = audio.createOscillator()
  const filter = audio.createBiquadFilter()
  const amp = audio.createGain()
  osc.type = 'sawtooth'
  osc.frequency.setValueAtTime(freq, at)
  filter.type = 'lowpass'
  filter.frequency.setValueAtTime(720, at)
  filter.frequency.exponentialRampToValueAtTime(380, at + dur)
  amp.gain.setValueAtTime(0.0001, at)
  amp.gain.exponentialRampToValueAtTime(gain, at + 0.12)
  amp.gain.exponentialRampToValueAtTime(0.0001, at + dur)
  osc.connect(filter)
  filter.connect(amp)
  amp.connect(dest)
  osc.start(at)
  osc.stop(at + dur + 0.05)
}

function drum(audio: AudioContext, dest: AudioNode, at: number, hard = false) {
  const osc = audio.createOscillator()
  const amp = audio.createGain()
  osc.type = 'sine'
  osc.frequency.setValueAtTime(hard ? 72 : 58, at)
  osc.frequency.exponentialRampToValueAtTime(28, at + 0.28)
  amp.gain.setValueAtTime(hard ? 0.22 : 0.12, at)
  amp.gain.exponentialRampToValueAtTime(0.0001, at + 0.42)
  osc.connect(amp)
  amp.connect(dest)
  osc.start(at)
  osc.stop(at + 0.45)
}

function phrase(audio: AudioContext, dest: AudioNode, t0: number) {
  horn(audio, dest, 146.83, t0, 1.6, 0.055)
  horn(audio, dest, 220.0, t0 + 0.08, 1.5, 0.035)
  horn(audio, dest, 174.61, t0 + 1.7, 1.5, 0.05)
  horn(audio, dest, 196.0, t0 + 3.3, 1.8, 0.048)
  horn(audio, dest, 130.81, t0 + 5.2, 2.4, 0.06)
  horn(audio, dest, 164.81, t0 + 5.3, 2.2, 0.03)
  drum(audio, dest, t0, true)
  drum(audio, dest, t0 + 1.65)
  drum(audio, dest, t0 + 3.3, true)
  drum(audio, dest, t0 + 4.95)
  drum(audio, dest, t0 + 6.6, true)
}

export async function startTheme() {
  const audio = context()
  if (audio.state === 'suspended') await audio.resume()
  if (playing) return
  stopTheme()
  master = audio.createGain()
  master.gain.value = 0.16
  master.connect(audio.destination)
  playing = true
  const loop = () => {
    if (!playing || !master) return
    phrase(audio, master, audio.currentTime + 0.02)
    timer = window.setTimeout(loop, 8200)
  }
  loop()
}

export function stopTheme() {
  playing = false
  if (timer != null) {
    window.clearTimeout(timer)
    timer = null
  }
  if (master && ctx) {
    const now = ctx.currentTime
    master.gain.cancelScheduledValues(now)
    master.gain.setValueAtTime(master.gain.value, now)
    master.gain.exponentialRampToValueAtTime(0.0001, now + 0.35)
    const node = master
    window.setTimeout(() => node.disconnect(), 400)
    master = null
  }
}

export function themePlaying() {
  return playing
}
