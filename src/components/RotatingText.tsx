import { useEffect, useState } from 'react'

export default function RotatingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (words.length <= 1) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timeouts: number[] = []
    const interval = window.setInterval(() => {
      setVisible(false)
      timeouts.push(
        window.setTimeout(() => {
          setIndex((i) => (i + 1) % words.length)
          setVisible(true)
        }, 450),
      )
    }, 3200)

    return () => {
      window.clearInterval(interval)
      timeouts.forEach((t) => window.clearTimeout(t))
    }
  }, [words.length])

  return (
    <span aria-live="polite" className={`rotate ${visible ? 'rotate--in' : 'rotate--out'}`}>
      {words[index]}
    </span>
  )
}
