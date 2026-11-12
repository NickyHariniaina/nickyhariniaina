import { useLayoutEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

type Knob = { x: number; w: number }

export default function Topbar() {
  const location = useLocation()
  const navRef = useRef<HTMLElement>(null)
  const [knob, setKnob] = useState<Knob | null>(null)

  useLayoutEffect(() => {
    const active = navRef.current?.querySelector<HTMLElement>(
      '.topbar__nav-link--active',
    )
    if (!active) return
    setKnob({ x: active.offsetLeft, w: active.offsetWidth })
  }, [location.pathname])

  return (
    <div className="topbar">
      <Link to="/" className="topbar__logo" aria-label="Home">
        <span className="topbar__logo-code">&lt;/&gt;</span>
      </Link>
      <nav className="topbar__nav" aria-label="Main" ref={navRef}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'topbar__nav-link topbar__nav-link--active' : 'topbar__nav-link'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? 'topbar__nav-link topbar__nav-link--active' : 'topbar__nav-link'
          }
        >
          Projects
        </NavLink>
        {knob && (
          <span
            className="topbar__nav-knob"
            aria-hidden="true"
            style={{ transform: `translateX(${knob.x}px)`, width: `${knob.w}px` }}
          />
        )}
      </nav>
      <ThemeToggle />
    </div>
  )
}
