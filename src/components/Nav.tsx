import { Link, useLocation } from 'react-router-dom'
import { site } from '../data'

const darkPages = ['/', '/about', '/work']

export default function Nav() {
  const { pathname } = useLocation()
  const isDark = darkPages.includes(pathname)

  return (
    <header className={`nav${isDark ? '' : ' nav--scrolled'}`}>
      <div className="container nav__inner">
        <Link className="nav__wordmark" to="/">
          {site.wordmark}
        </Link>
      </div>
    </header>
  )
}
