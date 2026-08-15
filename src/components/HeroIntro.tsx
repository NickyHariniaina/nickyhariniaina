import { useState } from 'react'
import { site } from '../data'
import ContactModal from './ContactModal'

export default function HeroIntro() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <p className="hero__meta">{site.role}</p>

        <nav className="hero__nav" aria-label="Primary">
          <a href="#about" className="hero__nav-item">
            <span>About me</span>
            <span className="hero__nav-arrow" aria-hidden="true">
              →
            </span>
          </a>
          <button
            type="button"
            className="hero__nav-item"
            onClick={() => setContactOpen(true)}
          >
            <span>How to reach me</span>
            <span className="hero__nav-arrow" aria-hidden="true">
              →
            </span>
          </button>
        </nav>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  )
}
