import { Link } from 'react-router-dom'

export default function Showcase() {
  return (
    <div className="showcase">
      <div className="showcase__stack">
        <figure className="showcase__frame showcase__frame--dark">
          <img
            src="/dark-brainfarter.png"
            alt="Brainfart preview – dark theme"
            loading="lazy"
            decoding="async"
          />
        </figure>
        <figure className="showcase__frame showcase__frame--light">
          <img
            src="/light-brainfarter.png"
            alt="Brainfart preview – light theme"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
      <div className="showcase__actions">
        <Link className="project__action project__action--primary" to="/projects">
          See more
        </Link>
      </div>
    </div>
  )
}