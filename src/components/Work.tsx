import { projects, socials } from '../data'

export default function Work() {
  const github = socials.find((s) => s.label === 'GitHub')

  return (
    <section className="block">
      <h2 className="command">~/$ cat projects.txt</h2>
      <p>
        Here is a list of my most relevant projects. For an exhaustive list,
        check out my{' '}
        <a className="link" href={github?.href} target="_blank" rel="noreferrer">
          GitHub
        </a>{' '}
        profile.
      </p>
      <ul className="projects__list">
        {projects.map((project) => (
          <li className="project" key={project.id}>
            <div className="project__head">
              <h3 className="project__name">— {project.title}</h3>
              <div className="project__links">
                {project.preview && (
                  <span>
                    [{' '}
                    <a
                      className="link"
                      href={project.preview}
                      target="_blank"
                      rel="noreferrer"
                    >
                      preview
                    </a>{' '}
                    ]
                  </span>
                )}
                {project.source && (
                  <span>
                    [{' '}
                    <a
                      className="link"
                      href={project.source}
                      target="_blank"
                      rel="noreferrer"
                    >
                      source
                    </a>{' '}
                    ]
                  </span>
                )}
              </div>
            </div>
            <p className="project__desc">{project.description}</p>
            <div className="project__tags">
              {project.tags.map((tag) => `#${tag}`).join(' ')}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
