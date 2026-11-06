import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiExternalLink } from 'react-icons/fi';
import { featuredProjects, otherProjects } from '../../data/projects';
import Badge from '../ui/Badge';

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      <a className="project-link project-link-secondary" href={project.github} target="_blank" rel="noopener noreferrer">
        <FiGithub aria-hidden="true" /> Source code <FiArrowUpRight aria-hidden="true" />
      </a>
      {project.live && (
        <a className="project-link project-link-primary" href={project.live} target="_blank" rel="noopener noreferrer">
          <FiExternalLink aria-hidden="true" /> Live demo <FiArrowUpRight aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

function LivePreview({ project }) {
  return (
    <div className={`project-preview project-preview-${project.accent}`}>
      <div className="preview-toolbar" aria-hidden="true">
        <span /><span /><span />
        <small>{project.title}</small>
      </div>
      <iframe
        src={project.live}
        title={`${project.title} live application preview`}
        loading="lazy"
        tabIndex={-1}
        aria-hidden="true"
        sandbox="allow-scripts allow-same-origin"
      />
      <a className="preview-open" href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo`}>
        <FiArrowUpRight aria-hidden="true" />
      </a>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={`featured-project project-${project.accent}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <LivePreview project={project} />
      <div className="featured-project-content">
        <p className="project-eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        {project.architecture && (
          <p className="project-architecture"><strong>Implementation:</strong> {project.architecture}</p>
        )}
        <ul className="project-details">
          {project.details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
        <div className="project-tech" aria-label={`${project.title} technologies`}>
          {project.tech.map((technology) => <Badge key={technology}>{technology}</Badge>)}
        </div>
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <>
      <section id="projects" className="section-padding projects-section">
        <div className="container-max">
          <div className="section-kicker"><span className="badge">Selected work</span><span className="kicker-rule" /></div>
          <h2 className="projects-heading">Featured Projects</h2>
          <p className="projects-intro">Applications I've built to explore frontend development, API integration, and real-time functionality.</p>
          <div className="featured-projects-grid">
            {featuredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
          </div>
        </div>
      </section>
      <section id="other-projects" className="section-padding other-projects-section">
        <div className="container-max">
          <div className="section-kicker"><span className="badge">More experiments</span><span className="kicker-rule" /></div>
          <h2 className="projects-heading other-heading">Other Projects</h2>
          <div className="other-projects-grid">
            {otherProjects.map((project) => (
              <article className="other-project-card" key={project.id}>
                <div className="other-project-title"><h3>{project.title}</h3><span>{project.category || 'Personal project'}</span></div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech" aria-label={`${project.title} technologies`}>
                  {project.tech.map((technology) => <Badge key={technology}>{technology}</Badge>)}
                </div>
                <ProjectLinks project={project} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
