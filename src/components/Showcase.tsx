import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const lightSlides = [
  { src: '/light-brainfarter.png', alt: 'Brainfart preview – light theme' },
  { src: '/dradraft-light.png', alt: 'Dradraft preview – light theme' },
]

const darkSlides = [
  { src: '/dark-brainfarter.png', alt: 'Brainfart preview – dark theme' },
  { src: '/dradraft-dark.png', alt: 'Dradraft preview – dark theme' },
]

function useTheme() {
  const [dark, setDark] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'dark',
  )

  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => {
      setDark(root.getAttribute('data-theme') === 'dark')
    })
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  return dark
}

const INTERVAL = 3500

export default function Showcase() {
  const dark = useTheme()
  const slides = dark ? darkSlides : lightSlides
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)
  const slideIndex = index % slides.length

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      INTERVAL,
    )
    return () => {
      if (timer.current !== null) clearInterval(timer.current)
    }
  }, [paused, slides.length])

  return (
    <div
      className="showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="showcase__viewport">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            loading="lazy"
            decoding="async"
            className={
              i === slideIndex
                ? 'showcase__slide showcase__slide--active'
                : 'showcase__slide'
            }
          />
        ))}
        <Link to="/projects" className="showcase__overlay">
          <span className="project__action project__action--primary">
            See more
          </span>
        </Link>
      </div>
      <div className="showcase__dots" role="tablist" aria-label="Slides">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            className={
              i === slideIndex ? 'showcase__dot showcase__dot--active' : 'showcase__dot'
            }
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}