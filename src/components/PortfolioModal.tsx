import { useEffect, useRef } from 'react'
import { CATEGORY_LABELS, type PortfolioItem } from '../data/portfolio'

interface Props {
  item: PortfolioItem | null
  onClose: () => void
}

export function PortfolioModal({ item, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (item && !dialog.open) dialog.showModal()
    if (!item && dialog.open) dialog.close()
  }, [item])

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby="modal-title"
      onClose={onClose}
      // A click that lands on the dialog itself (not its panel) is the backdrop.
      onClick={(e) => e.target === e.currentTarget && ref.current?.close()}
    >
      {item && (
        <div className="modal__panel">
          <div className="modal__media">
            {item.images.map((image, i) =>
              image.src ? (
                <img key={i} src={image.src} alt={image.alt} className={i === 0 ? 'is-lead' : undefined} />
              ) : (
                <div key={i} className="modal__placeholder">
                  [ {image.alt} ]
                </div>
              ),
            )}
          </div>
          <div className="modal__body">
            <div className="modal__top">
              <span className={`badge${item.category !== 'scene' ? ' badge--red' : ''}`}>
                {item.badge ?? CATEGORY_LABELS[item.category]}
              </span>
              <button type="button" className="icon-button" aria-label="Close" onClick={() => ref.current?.close()}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 5l14 14M19 5L5 19" />
                </svg>
              </button>
            </div>
            <h3 id="modal-title">{item.title}</h3>
            {item.meta && <p className="modal__meta">{item.meta}</p>}
            <p>{item.byline}</p>
            <div className="modal__links">
              {item.links.map((link) => (
                <a key={link.href} href={link.href} className="button button--ink">
                  {link.label} ↗
                </a>
              ))}
              {item.category !== 'scene' && (
                <a href="#contact" className="button button--outline" onClick={() => ref.current?.close()}>
                  Ask about prints
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}
