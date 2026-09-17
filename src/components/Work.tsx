import { projects } from '../data'

export default function Work() {
  return (
    <section className="block">
      <span className="eyebrow">Selected work</span>
      <h2 className="command">I work on:</h2>
      <ul className="projects__list">
        {projects.map((project) => (
          <li className="project" key={project.id}>
            <h3 className="project__name">{project.title}</h3>
            <p className="project__desc">{project.description}</p>
            <div className="project__footer">
              <div className="project__tags">
                {project.tags.map((tag) => (
                  <span className="project__tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project__actions">
                {project.preview && (
                  <a
                    className="project__action project__action--primary"
                    href={project.preview}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Preview
                  </a>
                )}
                {project.source && (
                  <a
                    className="project__action project__action--ghost"
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}