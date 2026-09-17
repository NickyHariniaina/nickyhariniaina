import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Topbar() {
  return (
    <div className="topbar">
      <Link to="/" className="topbar__logo" aria-label="Home">
        <span className="topbar__logo-mark">NH</span>
        <span className="topbar__logo-code">&lt;/&gt;</span>
      </Link>
      <nav className="topbar__nav" aria-label="Main">
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
      </nav>
      <ThemeToggle />
    </div>
  )
}