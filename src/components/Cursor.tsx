import { useEffect, useRef } from 'react'

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const dot = ref.current
    if (!dot) return

    let mx = 0
    let my = 0
    let dx = 0
    let dy = 0
    let rafId = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.classList.add('cursor--visible')
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const onCard = !!target.closest('.project-card__link, .hero__nav-item')
      const onLink = !!target.closest('a, button')
      dot.classList.toggle('cursor--expanded', onCard)
      dot.classList.toggle('cursor--hidden', !onCard && onLink)
    }

    const loop = () => {
      dx += (mx - dx) * 0.14
      dy += (my - dy) * 0.14
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`
      rafId = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    rafId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div ref={ref} className="cursor" aria-hidden="true">
      <span>View</span>
    </div>
  )
}
