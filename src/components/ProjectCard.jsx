import React from 'react';
import { Link } from 'react-router-dom';
import ProjectPreview from './ProjectPreview.jsx';

export default function ProjectCard({ project, featured = false }) {
  return <article className={`project-card ${featured ? 'featured' : ''} reveal`}>
    <div className="project-number mono">{project.number} <span>/ {project.year}</span></div>
    <div className="project-content"><p className="eyebrow">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><Link className="text-link" to={`/work/${project.slug}`}>VIEW CASE STUDY <span>↗</span></Link></div>
    <ProjectPreview kind={project.kind} />
  </article>;
}
