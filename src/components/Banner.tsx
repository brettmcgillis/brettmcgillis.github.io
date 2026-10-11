import { useEffect, useRef, useState } from 'react'
import bretTag from '../assets/brand/bret.png'
import { SITE } from '../data/site'
import { ArgyleMark } from './ArgyleMark'

const VIDEO = {
  webm: '/video/gh0st-loop.webm',
  mp4: '/video/gh0st-loop.mp4',
  poster: '/video/gh0st-poster.webp',
}

const NAV = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'CV', href: '#cv' },
  { label: 'Contact', href: '#contact' },
]

/** Reduced motion or Save-Data: show the poster only. */
function useStillOnly() {
  const [still, setStill] = useState(false)
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData
    const update = () => setStill(motion.matches || !!saveData)
    update()
    motion.addEventListener('change', update)
    return () => motion.removeEventListener('change', update)
  }, [])
  return still
}

export function Banner() {
  const still = useStillOnly()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (still) video.pause()
    else video.play().catch(() => {})
  }, [still])

  return (
    <section className="banner" aria-label="Banner: All My Friends Are Ghosts — a ghost watching a black hole">
      <div className="banner__stage">
        <video
          ref={videoRef}
          className="banner__video"
          poster={VIDEO.poster}
          autoPlay={!still}
          muted
          loop
          playsInline
          preload={still ? 'none' : 'auto'}
          aria-hidden="true"
        >
          <source src={VIDEO.webm} type='video/webm; codecs="av01.0.08M.08"' />
          <source src={VIDEO.mp4} type="video/mp4" />
        </video>
        <div className="banner__scrim" />
      </div>

      <header className="site-header">
        <a href="#top" className="site-header__home" aria-label={`${SITE.name} — home`}>
          <ArgyleMark top="#fff" animated />
        </a>
        <nav aria-label="Primary" className="site-nav">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={item.href === '#contact' ? 'is-cta' : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="banner__name">
        <img src={bretTag} alt="bret" className="banner__tag" width={373} height={572} />
        <div>
          <h1>
            Brett
            <br />
            McGillis
          </h1>
          <p className="banner__role">
            {SITE.role} — {SITE.tagline}
          </p>
        </div>
      </div>
    </section>
  )
}
