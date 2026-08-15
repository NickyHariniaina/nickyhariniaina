import { about, site, type Segment } from '../data'

function Segments({ parts }: { parts: Segment[] }) {
  return (
    <>
      {parts.map((part, i) =>
        part.h ? (
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
      <section className="block">
        <h2 className="command">~/$ whoami</h2>
        {about.whoami.map((paragraph, i) => (
          <p key={i}>
            <Segments parts={paragraph} />
          </p>
        ))}
      </section>

      <div className="facts">
        <h3>Fun facts:</h3>
        <ul>
          {about.funFacts.map((fact, i) => (
            <li key={i}>
              <Segments parts={fact} />
            </li>
          ))}
        </ul>
      </div>

      <section className="block">
        <h2 className="command">~/$ neofetch</h2>
        <div className="neofetch">
          <div className="neofetch__art" aria-hidden="true">
            <pre>{site.ascii}</pre>
          </div>
          <div className="neofetch__info">
            <div className="prompt">
              <span className="hl">nicky</span>@
              <span className="hl">{site.host}</span>
            </div>
            <div className="neofetch__sep">---------------------------------</div>
            {about.neofetch.map((row) => (
              <div className="neofetch__row" key={row.label}>
                <b>{row.label}: </b>
                {row.value}
              </div>
            ))}
            <div className="neofetch__palette">
              {about.palette.map((color) => (
                <span key={color} style={{ background: color }} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
