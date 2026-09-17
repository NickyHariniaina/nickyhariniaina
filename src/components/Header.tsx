import { site } from '../data'
import profilPic from '../assets/profil-pic.png'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <>
      <div className="topbar">
        <span className="topbar__name">{site.name}</span>
        <ThemeToggle />
      </div>
      <header className="header">
        <img
          src={profilPic}
          alt="Nicky Hariniaina"
          className="header__avatar"
        />
        <h1 className="header__name">{site.name}</h1>
        <p className="header__role">{site.role}</p>
      </header>
    </>
  )
}