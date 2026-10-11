import { useState } from 'react'
import { CATEGORY_LABELS, PORTFOLIO, type Category, type PortfolioItem } from '../data/portfolio'
import { EYE_CANDY_URL } from '../data/site'
import { PortfolioModal } from './PortfolioModal'

type Filter = 'all' | Category

const FILTER_LABELS: Record<Filter, string> = {
  all: 'All',
  scene: 'Scenes',
  print: 'Prints',
  print3d: '3D prints',
}

// Only offer filters that have something in them.
const FILTERS: Filter[] = ['all', ...(Object.keys(CATEGORY_LABELS) as Category[]).filter((c) =>
  PORTFOLIO.some((item) => item.category === c),
)]

function CardBody({ item, n }: { item: PortfolioItem; n: number }) {
  return (
    <>
      <span className="card__frame">
        <img src={item.thumbnail} alt="" loading="lazy" width={640} height={400} />
        <span className={`badge${item.category !== 'scene' ? ' badge--red' : ''}`}>
          {item.badge ?? CATEGORY_LABELS[item.category]}
        </span>
      </span>
      <span className="card__caption">
        <span>
          <span className="card__n">{String(n).padStart(2, '0')}</span> {item.title}
        </span>
        <span aria-hidden="true">+</span>
      </span>
    </>
  )
}

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>('all')
  const [open, setOpen] = useState<PortfolioItem | null>(null)
  const items = PORTFOLIO.filter((item) => filter === 'all' || item.category === filter)

  return (
    <section id="portfolio" className="panel portfolio">
      <div className="portfolio__head">
        <h2>Portfolio</h2>
        <div role="group" aria-label="Filter portfolio" className="filters">
          {FILTERS.map((f) => (
            <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {FILTER_LABELS[f]}
            </button>
          ))}
        </div>
      </div>

      <ul className="portfolio__grid">
        {items.map((item, i) => (
          <li key={item.id}>
            <button type="button" className="card" aria-haspopup="dialog" onClick={() => setOpen(item)}>
              <CardBody item={item} n={i + 1} />
            </button>
          </li>
        ))}
      </ul>

      <p className="portfolio__more">
        <a href={EYE_CANDY_URL}>All scenes in eye-candy ↗</a>
      </p>

      <PortfolioModal item={open} onClose={() => setOpen(null)} />
    </section>
  )
}
