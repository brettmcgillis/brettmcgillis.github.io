import { PORTFOLIO, type PortfolioItem } from '../data/portfolio'
import { Fold } from './Fold'

function CardBody({ item, n }: { item: PortfolioItem; n: number }) {
  return (
    <>
      <span className="card__frame">
        <span className="card__media">
          {item.thumbnail && <img src={item.thumbnail} alt="" loading="lazy" />}
        </span>
        <span className={`badge${item.href ? '' : ' badge--red'}`}>{item.badge}</span>
      </span>
      <span className="card__caption">
        <span>
          <span className="card__n">{String(n).padStart(2, '0')}</span> -{' '}
          {item.icon && <img src={item.icon} alt="" className="card__icon" width={20} height={20} />}
          {item.title}
        </span>
        {item.href && <span aria-hidden="true">↗</span>}
      </span>
      <span className="card__desc">{item.description}</span>
    </>
  )
}

export function Portfolio() {
  return (
    <Fold id="portfolio" title="Portfolio">
      <div className="panel portfolio">
        <ul className="portfolio__grid">
          {PORTFOLIO.map((item, i) => (
            <li key={item.id}>
              {item.href ? (
                <a className="card" href={item.href} target="_blank" rel="noopener noreferrer">
                  <CardBody item={item} n={i + 1} />
                </a>
              ) : (
                <div className="card card--soon">
                  <CardBody item={item} n={i + 1} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Fold>
  )
}
