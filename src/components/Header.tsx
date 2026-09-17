import { site } from '../data'
import profilPic from '../assets/profil-pic.png'
import ThemeToggle from './ThemeToggle'

function Role() {
  const [head, ...rest] = site.role.split(' & ')
  if (rest.length === 0) return <>{site.role}</>
  return (
    <>
      {head} <i className="amp">&amp;</i> {rest.join(' & ')}
    </>
  )
}

export default function Header() {
  return (
    <div className="header-shell">
      <div className="topbar">
        <span className="topbar__name">{site.name}</span>
        <ThemeToggle />
      </div>
      <header className="header">
        <div className="header__avatar-wrap">
          <img
            src={profilPic}
            alt="Nicky Hariniaina"
            className="header__avatar"
          />
        </div>
        <h1 className="header__name">{site.name}</h1>
        <p className="header__role">
          <Role />
        </p>
      </header>
    </div>
  )
}