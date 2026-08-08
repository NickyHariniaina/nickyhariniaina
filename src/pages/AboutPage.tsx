import { Link, useNavigate } from 'react-router-dom'
import { about } from '../data'

export default function AboutPage() {
  const navigate = useNavigate()

  const goBack = () => {
    if (window.history.length > 1) navigate(-1)
    else navigate('/')
  }

  return (
    <section className="section section--pad about">
      <div className="container">
        <button className="page-back reveal" onClick={goBack} type="button">
          <span aria-hidden="true">←</span> Back
        </button>

        <div className="grid-row about__block">
          <div className="grid-row__label reveal">
            <span className="label">Skills</span>
          </div>
          <div className="grid-row__content">
            <h3 className="about__sub reveal">Languages</h3>
            <ul className="about__chips reveal">
              {about.languages.map((lang) => (
                <li key={lang}>
                  <span className="about__chip">{lang}</span>
                </li>
              ))}
            </ul>

            <h3 className="about__sub reveal">Tools</h3>
            <ul className="about__chips reveal">
              {about.tools.map((tool) => (
                <li key={tool}>
                  <span className="about__chip">{tool}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid-row about__block">
          <div className="grid-row__label reveal">
            <span className="label">Parcours</span>
          </div>
          <div className="grid-row__content">
            {about.education.map((edu) => (
              <div key={edu.school} className="about__entry reveal">
                <div className="about__entry-head">
                  <span className="about__entry-title">{edu.degree}</span>
                  <span className="about__entry-date">{edu.period}</span>
                </div>
                <span className="about__entry-school">{edu.school}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid-row about__block">
          <div className="grid-row__label reveal">
            <span className="label">Experiences</span>
          </div>
          <div className="grid-row__content">
            <div className="about__experience reveal">
              <div className="about__experience-head">
                <span className="about__experience-title">
                  {about.experience.title}
                </span>
                <span className="about__experience-award">
                  {about.experience.award}
                </span>
              </div>
              <p className="about__experience-tags">
                {about.experience.tags.join(' · ')}
              </p>
            </div>
          </div>
        </div>

        <div className="about__cta reveal">
          <Link className="button" to="/work">
            View my work
          </Link>
        </div>
      </div>
    </section>
  )
}
