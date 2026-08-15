import { site } from '../data'

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__wordmark" href="#top">
          {site.wordmark}
        </a>
        <nav className="nav__links" aria-label="Sections">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
