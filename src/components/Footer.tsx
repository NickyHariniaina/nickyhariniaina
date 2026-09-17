import { contacts } from '../data'

export default function Footer() {
  return (
    <section className="block">
      <span className="eyebrow">Contact</span>
      <div className="contacts">
        {contacts.map((contact) => (
          <div className="contacts__item" key={contact.label}>
            <span className="contacts__label">{contact.label}</span>
            {contact.href ? (
              <a
                className="contacts__value link"
                href={contact.href}
                target={
                  contact.href.startsWith('http') ? '_blank' : undefined
                }
                rel="noreferrer"
              >
                {contact.value}
              </a>
            ) : (
              <span className="contacts__value">{contact.value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}