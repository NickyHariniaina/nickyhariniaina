import { projects } from '../data'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section className="block">
      <span className="eyebrow">All projects</span>
      <h2 className="command">Projects</h2>
      <ul className="projects__list">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </ul>
    </section>
  )
}