import fs from 'node:fs'
import path from 'node:path'

const SAMPLE_RATE = 44100
const BEAT = 0.86
const MELODY = [
  [293.66, 2],
  [329.63, 1],
  [349.23, 2],
  [329.63, 1],
  [293.66, 2],
  [220.0, 1],
  [233.08, 2],
  [220.0, 1],
  [196.0, 2],
  [174.61, 1],
  [164.81, 3],
  [146.83, 3],
]
const VIOLA = [
  [233.08, 2],
  [261.63, 1],
  [293.66, 2],
  [261.63, 1],
  [233.08, 2],
  [174.61, 1],
  [196.0, 2],
  [174.61, 1],
  [164.81, 2],
  [146.83, 1],
  [138.59, 3],
  [110.0, 3],
]
const CELLO = [
  [73.42, 6],
  [73.42, 3],
  [58.27, 3],
  [98.0, 3],
  [55.0, 3],
  [73.42, 3],
]
const PHRASE_BEATS = MELODY.reduce((sum, [, beats]) => sum + beats, 0)
const PASSES = 3
const LOOP_SEC = PHRASE_BEATS * PASSES * BEAT + 1.2

function bowEnv(t, dur) {
  const attack = Math.min(0.12, dur * 0.18)
  const release = Math.min(0.22, dur * 0.28)
  if (t < 0) return 0
  if (t < attack) return t / attack
  if (t > dur - release) return Math.max(0, (dur - t) / release)
  return 0.82
}

function luteEnv(t, dur) {
  const attack = 0.008
  if (t < attack) return t / attack
  return Math.exp(-t * 3.4) * (1 - Math.max(0, (t - (dur - 0.08)) / 0.08))
}

function bandSaw(phase, freq, brightness) {
  let s = 0
  const hMax = Math.max(5, Math.min(18, Math.floor(9000 / freq)))
  for (let h = 1; h <= hMax; h++) {
    s += Math.sin(2 * Math.PI * h * phase) * (1 / h) * brightness ** (h - 1)
  }
  return s * 0.55
}

function bowed(freq, dur, { brightness, vibrato, noise, detune = 0 }) {
  const n = Math.floor(dur * SAMPLE_RATE)
  const out = new Float32Array(n)
  let phase = Math.random() * 0.2
  let phase2 = phase + 0.13
  let hiss = 0
  const f0 = freq * (1 + detune)
  for (let i = 0; i < n; i++) {
    const t = i / SAMPLE_RATE
    const a = bowEnv(t, dur)
    const vib = vibrato * 0.0085 * Math.min(1, Math.max(0, (t - 0.18) / 0.28))
    const f = f0 * (1 + vib * Math.sin(2 * Math.PI * 5.4 * t))
    phase += f / SAMPLE_RATE
    phase2 += (f * 1.002) / SAMPLE_RATE
    hiss = 0.97 * hiss + 0.03 * (Math.random() * 2 - 1)
    out[i] = (bandSaw(phase, f, brightness) * 0.72 + bandSaw(phase2, f, brightness * 0.85) * 0.28 + hiss * noise) * a
  }
  return out
}

function karplus(freq, dur) {
  const period = Math.max(2, Math.round(SAMPLE_RATE / freq))
  const n = Math.floor(dur * SAMPLE_RATE)
  const delay = new Float32Array(period)
  for (let i = 0; i < period; i++) delay[i] = Math.random() * 2 - 1
  const out = new Float32Array(n)
  let idx = 0
  for (let i = 0; i < n; i++) {
    const t = i / SAMPLE_RATE
    const next = (idx + 1) % period
    const avg = 0.5 * (delay[idx] + delay[next]) * 0.988
    delay[idx] = avg
    out[i] = avg * luteEnv(t, dur)
    idx = next
  }
  return out
}

function sineTone(freq, dur, gain) {
  const n = Math.floor(dur * SAMPLE_RATE)
  const out = new Float32Array(n)
  for (let i = 0; i < n; i++) {
    const t = i / SAMPLE_RATE
    const a = bowEnv(t, dur)
    out[i] = Math.sin(2 * Math.PI * freq * t) * a * gain
  }
  return out
}

function drum(hard) {
  const dur = 0.55
  const n = Math.floor(dur * SAMPLE_RATE)
  const out = new Float32Array(n)
  const f0 = hard ? 68 : 52
  for (let i = 0; i < n; i++) {
    const t = i / SAMPLE_RATE
    const fall = Math.exp(-t * (hard ? 7.5 : 11))
    const f = f0 * Math.exp(-t * 5.2)
    out[i] = Math.sin(2 * Math.PI * f * t) * fall * (hard ? 0.62 : 0.4)
  }
  return out
}

function mix(left, right, samples, start, pan, gain) {
  const lg = Math.cos(((pan + 1) * Math.PI) / 4) * gain
  const rg = Math.sin(((pan + 1) * Math.PI) / 4) * gain
  const offset = Math.floor(start * SAMPLE_RATE)
  for (let i = 0; i < samples.length; i++) {
    const j = offset + i
    if (j < 0 || j >= left.length) continue
    left[j] += samples[i] * lg
    right[j] += samples[i] * rg
  }
}

function placePhrase(left, right, t0, octave, pass) {
  let t = t0
  for (const [freq, beats] of MELODY) {
    const dur = beats * BEAT
    const f = freq * octave
    mix(left, right, bowed(f, dur, { brightness: 0.62, vibrato: 1, noise: 0.02, detune: 0.001 }), t, -0.38, pass === 0 ? 0.42 : pass === 1 ? 0.5 : 0.46)
    if (pass > 0) {
      mix(left, right, bowed(f * 0.5, dur, { brightness: 0.4, vibrato: 0.35, noise: 0.01 }), t, -0.12, 0.18)
    }
    mix(left, right, karplus(f, dur * 0.95), t, 0.22, pass === 0 ? 0.22 : 0.14)
    t += dur
  }

  t = t0
  if (pass >= 1) {
    for (const [freq, beats] of VIOLA) {
      const dur = beats * BEAT
      mix(left, right, bowed(freq, dur, { brightness: 0.48, vibrato: 0.7, noise: 0.012 }), t, 0.34, pass === 1 ? 0.32 : 0.38)
      t += dur
    }
  }

  t = t0
  for (const [freq, beats] of CELLO) {
    const dur = beats * BEAT
    mix(left, right, bowed(freq, dur, { brightness: 0.34, vibrato: 0.25, noise: 0.008 }), t, 0.08, pass === 0 ? 0.28 : 0.36)
    mix(left, right, sineTone(freq, dur, 0.55), t, 0, pass === 0 ? 0.12 : 0.16)
    t += dur
  }

  if (pass === 2) {
    for (const [beat, hard] of [
      [0, true],
      [6, false],
      [12, true],
      [15, false],
      [18, true],
    ]) {
      mix(left, right, drum(hard), t0 + beat * BEAT, 0, 0.55)
    }
  }
}

function room(left, right) {
  const taps = [0.029, 0.047, 0.073, 0.109, 0.141, 0.187, 0.241]
  const gains = [0.38, 0.31, 0.24, 0.19, 0.14, 0.1, 0.07]
  const outL = new Float32Array(left.length)
  const outR = new Float32Array(right.length)
  for (let i = 0; i < left.length; i++) {
    let l = left[i]
    let r = right[i]
    for (let t = 0; t < taps.length; t++) {
      const j = i - Math.floor(taps[t] * SAMPLE_RATE)
      if (j < 0) continue
      const g = gains[t]
      if (t % 2 === 0) {
        l += left[j] * g
        r += right[j] * g * 0.72
      } else {
        r += right[j] * g
        l += left[j] * g * 0.72
      }
    }
    outL[i] = l
    outR[i] = r
  }
  return [outL, outR]
}

const n = Math.floor(SAMPLE_RATE * LOOP_SEC)
let left = new Float32Array(n)
let right = new Float32Array(n)

for (let i = 0; i < n; i++) {
  const t = i / SAMPLE_RATE
  const fade = Math.min(1, t / 1.4) * Math.min(1, (LOOP_SEC - t) / 0.8)
  const drone =
    0.09 * Math.sin(2 * Math.PI * 73.42 * t) +
    0.05 * Math.sin(2 * Math.PI * 110 * t)
  left[i] += drone * fade
  right[i] += drone * fade * 0.96
}

const phraseSec = PHRASE_BEATS * BEAT
placePhrase(left, right, 0.2, 1, 0)
placePhrase(left, right, 0.2 + phraseSec, 1, 1)
placePhrase(left, right, 0.2 + phraseSec * 2, 2, 2)

;[left, right] = room(left, right)

let peak = 1e-9
let sum = 0
for (let i = 0; i < n; i++) {
  peak = Math.max(peak, Math.abs(left[i]), Math.abs(right[i]))
  sum += left[i] * left[i] + right[i] * right[i]
}
const scale = 0.7 / peak
for (let i = 0; i < n; i++) {
  left[i] *= scale
  right[i] *= scale
}
const rms = Math.sqrt(sum / (n * 2)) * scale
console.log({
  seconds: LOOP_SEC.toFixed(1),
  peak: 0.7,
  rms: rms.toFixed(4),
  dbfs: (20 * Math.log10(rms)).toFixed(1),
})

const buf = Buffer.alloc(44 + n * 4)
buf.write('RIFF', 0)
buf.writeUInt32LE(36 + n * 4, 4)
buf.write('WAVE', 8)
buf.write('fmt ', 12)
buf.writeUInt32LE(16, 16)
buf.writeUInt16LE(1, 20)
buf.writeUInt16LE(2, 22)
buf.writeUInt32LE(SAMPLE_RATE, 24)
buf.writeUInt32LE(SAMPLE_RATE * 4, 28)
buf.writeUInt16LE(4, 32)
buf.writeUInt16LE(16, 34)
buf.write('data', 36)
buf.writeUInt32LE(n * 4, 40)
let o = 44
for (let i = 0; i < n; i++) {
  buf.writeInt16LE(Math.max(-1, Math.min(1, left[i])) * 32767, o)
  buf.writeInt16LE(Math.max(-1, Math.min(1, right[i])) * 32767, o + 2)
  o += 4
}

const out = path.join(import.meta.dirname, '..', 'public', 'landing', 'rains-of-castamere.wav')
fs.mkdirSync(path.dirname(out), { recursive: true })
fs.writeFileSync(out, buf)
console.log('wrote', out, buf.length)
