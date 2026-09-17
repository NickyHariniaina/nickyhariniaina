import { about, type Segment } from '../data'

const tech = [
  { name: 'C', icon: 'c/c-original.svg' },
  { name: 'C++', icon: 'cplusplus/cplusplus-original.svg' },
  { name: 'Java', icon: 'java/java-original.svg' },
  { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
  { name: 'Python', icon: 'python/python-original.svg' },
  { name: 'React', icon: 'react/react-original.svg' },
  { name: 'Docker', icon: 'docker/docker-original.svg' },
  { name: 'Git', icon: 'git/git-original.svg' },
]

const iconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/'

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

export default function Introduction() {
  return (
    <section className="block">
      <span className="eyebrow">Introduction</span>
      <div className="intro">
        {about.whoami.map((paragraph, i) => (
          <p key={i}>
            <Segments parts={paragraph} />
          </p>
        ))}
      </div>
      <ul className="tech" aria-label="Technologies I work with">
        {tech.map((t) => (
          <li className="tech__item" key={t.name}>
            <img
              className="tech__icon"
              src={iconBase + t.icon}
              alt={t.name}
              loading="lazy"
              decoding="async"
            />
            <span className="tech__label">{t.name}</span>
          </li>
        ))}
      </ul>
      <hr className="scribble" aria-hidden="true" />
    </section>
  )
}