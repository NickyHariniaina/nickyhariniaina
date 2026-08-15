import { contacts } from '../data'

export default function Footer() {
  return (
    <section className="block">
      <div className="footer__sep">
        ================================================
      </div>
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
    </section>
  )
}
