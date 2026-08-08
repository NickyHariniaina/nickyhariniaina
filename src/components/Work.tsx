import { Link, useNavigate } from 'react-router-dom'
import { projects } from '../data'
import Art from './Art'

export default function Work() {
  const navigate = useNavigate()

  const goBack = () => {
    if (window.history.length > 1) navigate(-1)
    else navigate('/')
  }

  return (
    <section className="section section--pad work" id="work">
      <div className="container">
        <button className="page-back reveal" onClick={goBack} type="button">
          <span aria-hidden="true">←</span> Back
        </button>

        <div className="work__grid">
          {projects.map((project) => {
            const content =
              project.kind === 'case' ? (
                <div className="project-card__case">
                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-card__tag">
                        {tag}
                      </span>
                    ))}
                    <span className="project-card__year">{project.year}</span>
                  </div>
                  <div className="project-card__case-body">
                    <span className="label project-card__case-label">
                      Case study
                    </span>
                    <h3 className="project-card__case-title">{project.title}</h3>
                    <p className="project-card__case-desc">
                      {project.description}
                    </p>
                    <span className="project-card__case-cta">View project</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="project-card__tags">
                    <h3 className="project-card__title">{project.title}</h3>
                    <span className="project-card__sub">{project.subtitle}</span>
                    <span className="project-card__year">{project.year}</span>
                  </div>
                  <div className="project-card__image">
                    <Art id={project.id} />
                  </div>
                </>
              )

            return (
              <article
                key={project.id}
                className={`project-card project-card--${project.kind}`}
              >
                {project.href ? (
                  <a
                    className="project-card__link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  <Link className="project-card__link" to="/contact">
                    {content}
                  </Link>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
