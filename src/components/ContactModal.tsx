import { useEffect } from 'react'
import type Lenis from 'lenis'
import { site, socials } from '../data'

type Props = {
  open: boolean
  onClose: () => void
}

type LenisWindow = Window & { __lenis?: Lenis }

export default function ContactModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return

    const lenis = (window as LenisWindow).__lenis
    lenis?.stop()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      lenis?.start()
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="How to reach me">
      <div className="modal__scrim" onClick={onClose} />
      <div className="modal__panel">
        <button
          className="modal__close"
          onClick={onClose}
          type="button"
          aria-label="Close"
        >
          ×
        </button>

        <span className="label">How to reach me</span>
        <h2 className="modal__title">Let&apos;s talk</h2>

        <a className="modal__item modal__email" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <a className="modal__item modal__phone" href={`tel:${site.phoneHref}`}>
          {site.phone}
        </a>
        <span className="modal__location">{site.location}</span>

        <div className="modal__socials">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
