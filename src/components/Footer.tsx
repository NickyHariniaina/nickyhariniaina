import { Link } from 'react-router-dom'
import { site, projects, socials } from '../data'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="grid-row footer__cta">
          <div className="grid-row__label">
            <span className="label">Get in touch</span>
          </div>
          <div className="grid-row__content">
            <h2 className="display footer__title">Interested?</h2>
            <div className="footer__actions">
              <a className="button" href={`mailto:${site.email}`}>
                Get in touch
              </a>
              <span className="footer__or">…or email me at</span>
              <a className="footer__email" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="footer__columns">
          <div className="footer__col">
            <span className="label">Work</span>
            <ul>
              {projects.slice(0, 4).map((p) => (
                <li key={p.id}>
                  <Link to="/work">{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <span className="label">Connect</span>
            <ul>
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__col footer__col--note">
            <p className="lead footer__note">
              {site.availability}. Based in {site.location}.
            </p>
          </div>
        </div>

        <div className="footer__bar">
          <span>© {new Date().getFullYear()}</span>
          <span>{site.name}</span>
          <span>{site.location}</span>
        </div>
      </div>
    </footer>
  )
}
