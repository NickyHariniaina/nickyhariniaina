import { about, type Segment } from '../data'

function Segments({ parts }: { parts: Segment[] }) {
  return (
    <>
      {parts.map((part, i) =>
        part.href ? (
          <a
            className="link"
            href={part.href}
            target="_blank"
            rel="noreferrer"
            key={i}
          >
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
    <section className="block">
      <span className="eyebrow">About</span>
      <div className="intro">
        {about.whoami.map((paragraph, i) => (
          <p key={i}>
            <Segments parts={paragraph} />
          </p>
        ))}
      </div>
      <hr className="scribble" aria-hidden="true" />
    </section>
  )
}