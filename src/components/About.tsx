import { about, type Segment } from '../data'

function Segments({ parts }: { parts: Segment[] }) {
  return (
    <>
      {parts.map((part, i) =>
        part.href ? (
          <a className="link" href={part.href} target="_blank" rel="noreferrer" key={i}>
            {part.t}
          </a>
        ) : part.h ? (
          <span className="hl" key={i}>
            {part.t}
          </span>
        ) : (
          <span key={i}>{part.t}</span>
        ),
      )}
    </>
  )
}

export default function About() {
  return (
    <>
      <div className="neofetch__palette" aria-hidden="true">
        <span className="palette__swatch palette__swatch--1" />
        <span className="palette__swatch palette__swatch--2" />
        <span className="palette__swatch palette__swatch--3" />
        <span className="palette__swatch palette__swatch--4" />
      </div>

      <section className="block">
        {about.whoami.map((paragraph, i) => (
          <p key={i}>
            <Segments parts={paragraph} />
          </p>
        ))}
      </section>
    </>
  )
}
