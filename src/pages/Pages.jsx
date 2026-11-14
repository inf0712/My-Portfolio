import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects, categories } from '../data/projects.js';
import { experiments } from '../data/experiments.js';
import { education, experience, profile } from '../data/profile.js';
import { skills } from '../data/skills.js';

const Head = ({ number, title }) => <div className="section-head"><span className="section-no mono">{number} / {title}</span><span className="rule"/><span className="mono small">INFANT JOSEPH</span></div>;

export function Work() {
  const [filter, setFilter] = useState('ALL');
  const shown = projects.filter((project) => filter === 'ALL' || project.category === filter);
  return <main className="subpage wrap"><Head number="01" title="PROJECT DIRECTORY"/><div className="subpage-title"><p className="eyebrow">PROJECTS</p><h1>SELECTED<br/><span className="green">WORK.</span></h1></div><div className="filter-bar page-filters">{categories.map((category) => <button className={filter === category ? 'selected' : ''} key={category} onClick={() => setFilter(category)}>{category}<span>{category === 'ALL' ? `0${projects.length}` : `0${projects.filter((project) => project.category === category).length}`}</span></button>)}</div><div className="project-grid">{shown.map((project, index) => <ProjectCard key={project.slug} project={project} featured={index === 0}/>)}</div></main>;
}

export function ProjectDetails() {
  const { slug } = useParams(); const project = projects.find((item) => item.slug === slug);
  if (!project) return <main className="subpage wrap"><h1>PROJECT NOT FOUND</h1><Link to="/work" className="text-link">BACK TO WORK ↗</Link></main>;
  return <main className="case-study wrap"><Head number={project.number} title="CASE STUDY"/><Link className="back-link mono" to="/work">← ALL PROJECTS</Link><div className="case-title"><p className="eyebrow">{project.category} <span>·</span> {project.year}</p><h1>{project.title}</h1><p className="case-description">{project.description}</p></div><div className="case-grid"><div><p className="mono case-label">DETAILS</p><ul className="detail-list">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><p className="mono case-label">TOOLS</p><div className="tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div></div><div className="case-next"><span className="mono">NEXT PROJECT</span><Link to={`/work/${projects[(projects.indexOf(project) + 1) % projects.length].slug}`}>{projects[(projects.indexOf(project) + 1) % projects.length].title} <span>↗</span></Link></div></main>;
}

export function About() {
  return <main className="subpage wrap"><Head number="02" title="ABOUT"/><div className="subpage-title"><p className="eyebrow">COMPUTER SCIENCE / KERALA, INDIA</p><h1>ABOUT</h1></div><div className="about-page-grid"><div className="about-page-copy"><p className="lead">Computer Science graduate based in Kerala, pursuing entry-level Cloud and DevOps opportunities.</p><p>Focused on Linux, AWS, networking and automation.</p><div className="about-page-links"><a href={profile.github} target="_blank" rel="noreferrer">GITHUB ↗</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN ↗</a></div></div></div><div className="section-block"><Head number="03" title="EDUCATION"/>{education.map((item) => <div className="timeline-item" key={item.title}><span className="timeline-date mono">{item.date}</span><div><h3>{item.title}</h3><p>{item.organization}{item.detail ? ` · ${item.detail}` : ''}</p></div></div>)}</div><div className="section-block"><Head number="04" title="TECHNICAL INTERESTS"/><div className="interest-list">{['Cloud infrastructure', 'Linux systems', 'Networking', 'Automation', 'Backend development', 'AI & accessibility'].map((interest, i) => <div key={interest}><span className="mono">0{i + 1}</span>{interest}</div>)}</div></div></main>;
}

export function Experience() {
  return <main className="subpage wrap"><Head number="01" title="EXPERIENCE"/><div className="subpage-title"><p className="eyebrow">TRAINING & EDUCATION</p><h1>EXPERIENCE</h1></div><div className="section-block"><Head number="02" title="TRAINING & EXPERIENCE"/>{experience.map((item) => <div className="timeline-item" key={item.title}><span className="timeline-date mono">{item.date}</span><div><h3>{item.title}</h3><p>{item.organization}{item.location ? ` · ${item.location}` : ''}{item.note ? ` · ${item.note}` : ''}</p></div></div>)}</div><div className="section-block"><Head number="03" title="EDUCATION"/>{education.map((item) => <div className="timeline-item" key={item.title}><span className="timeline-date mono">{item.date}</span><div><h3>{item.title}</h3><p>{item.organization}{item.detail ? ` · ${item.detail}` : ''}</p></div></div>)}<p className="activity-line mono">AUGMENTIA AI WORKSHOP — PARTICIPATION</p></div></main>;
}

export function Lab() {
  return <main className="subpage wrap"><Head number="01" title="THE LAB"/><div className="subpage-title"><p className="eyebrow">CURRENT EXPLORATIONS</p><h1>LAB</h1></div><div className="lab-grid">{experiments.map((entry, index) => <article className="lab-card" key={entry.title}><div className="lab-card-top"><span className="mono">0{index + 1} / {entry.category}</span><span className={`status-label ${entry.status === 'IN PROGRESS' ? 'in-progress' : ''}`}>{entry.status}</span></div><h2>{entry.title}</h2><p>{entry.note}</p></article>)}</div></main>;
}

export function Contact() {
  return <main className="contact-page"><div className="wrap"><Head number="01" title="CONTACT"/><p className="eyebrow">ENTRY-LEVEL CLOUD / DEVOPS ROLES</p><h1>CONTACT</h1><div className="contact-bottom"><p>Open to Cloud Support and Junior DevOps opportunities.</p><div className="contact-links"><a href={`mailto:${profile.email}`}>EMAIL <small>{profile.email}</small><span>↗</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN <small>linkedin.com/in/infant-joseph</small><span>↗</span></a><a href={profile.github} target="_blank" rel="noreferrer">GITHUB <small>github.com/inf0712</small><span>↗</span></a></div></div></div></main>;
}

export function Skills() {
  return <main className="subpage wrap"><Head number="01" title="SKILLS"/><div className="subpage-title"><p className="eyebrow">A WORKING TOOLKIT</p><h1>SKILLS</h1></div><div className="skill-list skill-page-list">{skills.map((group) => <div className="skill-row" key={group.number}><span className="mono skill-num">{group.number}</span><h3>{group.title}</h3><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div><span className="skill-mark">+</span></div>)}</div></main>;
}
