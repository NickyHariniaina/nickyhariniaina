import { site, contacts, socials } from '../data'

export default function Footer() {
  return (
    <>
      <section className="block">
        <h2 className="command">~/$ cat contacts.yml</h2>
        <ul className="contacts__list">
          {contacts.map((contact) => (
            <li key={contact.label}>
              <span className="contacts__label">- {contact.label}: </span>
              {contact.href ? (
                <a
                  className="link"
                  href={contact.href}
                  target={
                    contact.href.startsWith('http') ? '_blank' : undefined
                  }
                  rel="noreferrer"
                >
                  {contact.value}
                </a>
              ) : (
                <span>{contact.value}</span>
              )}
            </li>
          ))}
        </ul>
        <p className="contacts__comment">
          # You can also reach me on social media
        </p>
      </section>

      <footer className="footer">
        <div className="footer__sep">
          ================================================
        </div>
        <div className="footer__built">
          Built with <span className="hl">♥</span> using{' '}
          <span className="hl">React</span> and <span className="hl">Vite</span>
        </div>
        <div className="footer__socials">
          {socials.map((social) => (
            <a
              className="link"
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
        <div className="footer__copyright">
          ©{new Date().getFullYear()} {site.name}.
        </div>
        <div className="footer__vim">vim:tw=78:ts=4:noet:ft=html:norl:</div>
      </footer>
    </>
  )
}
