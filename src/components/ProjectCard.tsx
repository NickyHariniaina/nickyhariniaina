import type { Project } from '../data'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="project">
      <div className="project__head">
        <h3 className="project__name">{project.title}</h3>
        {project.status === 'wip' && (
          <span className="project__status">
            <span className="project__status-dot" aria-hidden="true" />
            Work in progress
          </span>
        )}
      </div>
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
  )
}