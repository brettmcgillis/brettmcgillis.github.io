import { useEffect } from 'react'
import { Banner } from './components/Banner'
import { Portfolio } from './components/Portfolio'
import { Contact, Cv, SiteFooter } from './components/Sections'

/** Opens a collapsed section when a `#id` link points at it, or the page loads with that hash. */
function useOpenFoldOnHash() {
  useEffect(() => {
    const open = () => {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)))
      if (target instanceof HTMLDetailsElement) target.open = true
    }
    // Clicking a link to the hash you're already on fires no hashchange.
    const onClick = (e: MouseEvent) => {
      if ((e.target as Element).closest?.('a[href^="#"]')) requestAnimationFrame(open)
    }
    open()
    window.addEventListener('hashchange', open)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('hashchange', open)
      document.removeEventListener('click', onClick)
    }
  }, [])
}

export default function App() {
  useOpenFoldOnHash()
  return (
    <div id="top" className="page">
      <Banner />
      <main className="page__main">
        <Cv />
        <Portfolio />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
