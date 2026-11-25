import type { ReactNode } from 'react'

interface Props {
  id: string
  title: string
  icon?: ReactNode
  children: ReactNode
}

/** A collapsible page section. Starts closed; nav links to `#id` open it (see App). */
export function Fold({ id, title, icon, children }: Props) {
  return (
    <details id={id} className="fold">
      <summary className="fold__summary">
        <span className="fold__title">
          {icon}
          <h2>{title}</h2>
        </span>
        <span className="fold__toggle" aria-hidden="true" />
      </summary>
      <div className="fold__body">{children}</div>
    </details>
  )
}
