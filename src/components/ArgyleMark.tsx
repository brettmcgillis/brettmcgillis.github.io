import { useEffect, useRef } from 'react'

// The eye-candy loader mark: eleven squares on a 45° grid (see eye-candy
// src/utils/argylePattern.js). Seven red 'b' squares, four 't' squares on top.

const SQ = 36
const B: [number, number][] = [
  [0, 0], [1.5, -1.5], [-1.5, 1.5], [0, 1.5], [0, -1.5], [1.5, 0], [-1.5, 0],
]
const T: [number, number][] = [
  [-0.75, -0.75], [0.75, -0.75], [-0.75, 0.75], [0.75, 0.75],
]

// Loader 22 — Figure Eight (eye-candy src/app/scaffold/loader/loaders.jsx):
// top squares stay solid; red squares trail through an ∞ path.
const FIGURE8_ORDER = [6, 0, 5, 1, 4, 0, 3, 2]
const CYCLE_SECONDS = 2.4

function figure8Opacity(i: number, t: number) {
  const n = FIGURE8_ORDER.length
  const head = ((t / CYCLE_SECONDS) % 1) * n
  let minDist = n
  FIGURE8_ORDER.forEach((id, slot) => {
    if (id === i) minDist = Math.min(minDist, (head - slot + n) % n)
  })
  return Math.max(0.08, 1 - minDist / 4)
}

interface Props {
  /** Color of the four overlapping squares; flip to white on dark grounds. */
  top?: string
  animated?: boolean
  className?: string
  label?: string
}

export function ArgyleMark({ top = 'var(--ink)', animated = false, className, label }: Props) {
  const redRefs = useRef<(SVGRectElement | null)[]>([])

  useEffect(() => {
    if (!animated || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = (now - start) / 1000
      redRefs.current.forEach((rect, i) => rect?.setAttribute('opacity', String(figure8Opacity(i, t))))
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [animated])

  const rect = ([sx, sy]: [number, number]) => ({
    x: sx * SQ - SQ / 2,
    y: sy * SQ - SQ / 2,
    width: SQ,
    height: SQ,
  })

  return (
    <svg
      viewBox="-102 -64 204 128"
      className={className}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <g transform="rotate(45)">
        {B.map((p, i) => (
          <rect key={`b${i}`} ref={(el) => { redRefs.current[i] = el }} {...rect(p)} fill="var(--red)" />
        ))}
        {T.map((p, i) => (
          <rect key={`t${i}`} {...rect(p)} fill={top} />
        ))}
      </g>
    </svg>
  )
}
