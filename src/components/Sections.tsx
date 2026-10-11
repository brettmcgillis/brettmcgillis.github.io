import bretTag from '../assets/brand/bret.png'
import reversal from '../assets/brand/reversal.png'
import { CV, SITE } from '../data/site'

const YEAR = new Date().getFullYear()

export function Cv() {
  return (
    <section id="cv" className="cv">
      <div className="cv__intro">
        <h2>CV</h2>
        <p>{CV.bio}</p>
        <a href={CV.pdf} target="_blank" rel="noopener noreferrer" className="button button--ink">
          Full CV ↓
        </a>
      </div>
      <ol className="panel cv__list">
        {CV.roles.map((r, i) => (
          <li key={i}>
            <span>
              {r.role} @ {r.org}
            </span>
            <span className="muted">{r.years}</span>
          </li>
        ))}
        <li className="muted">{CV.tools.join(' · ')}</li>
      </ol>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__title">
        <img src={reversal} alt="" width={285} height={212} />
        <h2>Say hi</h2>
      </div>
      <div className="contact__links">
        {SITE.socials.map((s, i) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={`button button--lg ${i === 0 ? 'button--red' : 'button--paper'}`}>
            {s.label} ↗
          </a>
        ))}
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span className="chip">© {YEAR} {SITE.name}</span>
      <img src={bretTag} alt="" className="site-footer__tag" width={373} height={572} />
    </footer>
  )
}
