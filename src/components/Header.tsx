import { site } from '../data'

export default function Header() {
  return (
    <header className="header">
      <div className="header__avatar" aria-hidden="true">
        NH
      </div>
      <h1 className="header__name">{site.name}</h1>
      <p className="header__role">&lt;&gt; {site.role} &lt;/&gt;</p>
    </header>
  )
}
