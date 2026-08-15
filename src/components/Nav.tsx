import { Link } from 'react-router-dom'
import { site } from '../data'

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link className="nav__wordmark" to="/">
          {site.wordmark}
        </Link>
      </div>
    </header>
  )
}
