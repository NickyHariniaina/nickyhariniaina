import { projects } from '../data'

export default function Work() {
  return (
    <section className="block">
      <h2 className="command">I work on:</h2>
      <ul className="projects__list">
        {projects.map((project) => (
          <li className="project" key={project.id}>
            <div className="term">
              <div className="term__bar">
                <span className="term__dots" aria-hidden="true">
                  <span className="term__dot term__dot--blue" />
                  <span className="term__dot term__dot--orange" />
                  <span className="term__dot term__dot--green" />
                </span>
                <span className="term__file">~/projects/{project.id}</span>
              </div>
              <div className="term__body">
                <h3 className="project__name">— {project.title}</h3>
                <p className="project__desc">{project.description}</p>
                <div className="project__footer">
                  <div className="project__tags">
                    {project.tags.map((tag) => `#${tag}`).join(' ')}
                  </div>
                  <div className="project__actions">
                    {project.preview && (
                      <a
                        className="project__action"
                        href={project.preview}
                        target="_blank"
                        rel="noreferrer"
                      >
                        preview
                      </a>
                    )}
                    {project.source && (
                      <a
                        className="project__action"
                        href={project.source}
                        target="_blank"
                        rel="noreferrer"
                      >
                        source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
