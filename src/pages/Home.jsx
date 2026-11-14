import React from 'react';
import { profile, experience, education } from '../data/profile.js';
import { projects } from '../data/projects.js';
import { skills } from '../data/skills.js';
import Footer from '../components/Footer.jsx';

const SectionLabel = ({ children }) => <p className="section-label">{children}</p>;

export default function Home() {
  return <main>
    <section className="hero wrap" id="top">
      <div className="hero-meta"><span><i className="status-dot"/> OPEN TO OPPORTUNITIES</span><span>IDUKKI, KERALA · INDIA</span></div>
      <div className="hero-identity"><p className="hero-kicker">SYSTEMS / INFRASTRUCTURE / AUTOMATION</p><h1>Infant <span>Joseph</span></h1><p className="hero-role">DEVOPS ENGINEER</p></div>
      <div className="hero-bottom"><p>Build. Break. Improve. Manage. Understand.</p><p className="hero-subline">I’m interested in what happens beneath the interface and in making systems easier to understand.</p><div className="hero-links"><a className="button" href="#work">SELECTED WORK <span>↓</span></a><a className="text-link" href={`mailto:${profile.email}`}>GET IN TOUCH ↗</a></div></div>
      <div className="hero-index mono"><span>COMPUTER SCIENCE</span><span>01 / 06</span></div>
    </section>

    <section className="section chapter" id="work"><div className="wrap"><div className="section-top"><SectionLabel>02 / SELECTED WORK</SectionLabel><p className="section-note">A few practical projects, built while learning how software and systems fit together.</p></div>
      <div className="project-list">{projects.map((project, i) => <article className="project-row" key={project.slug}><div className="project-meta mono"><span>0{i + 1}</span><span>{project.year}</span></div><div className="project-copy"><p className="eyebrow">{project.category}</p><h2>{project.title}</h2><p>{project.description}</p>{project.result && <p className="project-result">{project.result}</p>}<div className="tags">{project.technologies.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}</div></div><div className={`project-mark ${project.kind}`} aria-hidden="true"><div className="project-flow">{project.flow.map((step, stepIndex) => <React.Fragment key={step}>{stepIndex > 0 && <i/>}<span>{step}</span></React.Fragment>)}</div><b>FLOW / 0{i + 1}</b></div></article>)}</div><a className="next-page mono" href="#about">NEXT / ABOUT <span>↓</span></a>
      </div>
    </section>

    <section className="section section-alt chapter" id="about"><div className="wrap"><div className="about-grid"><div><SectionLabel>03 / ABOUT</SectionLabel><h2 className="statement">Interested in what happens <span>beneath the surface.</span></h2></div><div className="about-copy"><p className="lead">I’m a Computer Science graduate from Kerala, interested in cloud infrastructure, Linux and automation.</p><p>I learn by building, troubleshooting and understanding the systems behind the tools. I’m currently undertaking DevOps training while developing a practical foundation in infrastructure and operations.</p><div className="education"><span className="mono">EDUCATION</span><strong>B.Tech, Computer Science</strong><span>Kerala Technical University · 2022—2026</span></div></div></div><a className="next-page mono" href="#capabilities">NEXT / CAPABILITIES <span>↓</span></a></div></section>

    <section className="section chapter" id="capabilities"><div className="wrap"><div className="section-top"><SectionLabel>04 / CAPABILITIES</SectionLabel><p className="section-note">A working toolkit, built through study and hands-on projects.</p></div><div className="capability-grid">{skills.slice(0,4).map((group) => <div className="capability" key={group.number}><span className="mono">{group.number}</span><h3>{group.title === 'PROGRAMMING & TOOLS' ? 'DEVELOPMENT' : group.title}</h3><p>{(group.title === 'CLOUD' ? group.items.slice(0, 8) : group.title === 'NETWORKING' ? group.items.slice(0, 6) : group.items).join(' · ')}</p></div>)}</div><a className="next-page mono" href="#background">NEXT / BACKGROUND <span>↓</span></a></div></section>

    <section className="section section-alt chapter" id="background"><div className="wrap"><div className="background-grid"><div><SectionLabel>05 / BACKGROUND</SectionLabel><h2 className="statement">Learning through<br/><span>practice.</span></h2></div><div className="background-list"><div className="background-group"><span className="mono">TRAINING</span>{experience.slice(0,1).map((item) => <article key={item.title}><strong>{item.title}</strong><p>{item.organization} · {item.location}</p></article>)}</div><div className="background-group"><span className="mono">INTERNSHIPS</span>{experience.slice(1).map((item) => <article key={item.title}><strong>{item.title}</strong><p>{item.organization} · {item.date}</p></article>)}</div><div className="background-group"><span className="mono">EDUCATION</span>{education.slice(0,1).map((item) => <article key={item.title}><strong>{item.title}</strong><p>{item.organization} · {item.date}</p></article>)}</div></div></div><a className="next-page mono" href="#contact">NEXT / CONTACT <span>↓</span></a></div></section>

    <section className="contact-section chapter" id="contact"><div className="wrap"><SectionLabel>06 / CONTACT</SectionLabel><h2>Let’s build<br/><span>something useful.</span></h2><div className="contact-bottom"><p>Open to entry-level Cloud Support, Junior DevOps and infrastructure opportunities.</p><div className="contact-links"><a href={`mailto:${profile.email}`}>EMAIL <span>↗</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN <span>↗</span></a><a href={profile.github} target="_blank" rel="noreferrer">GITHUB <span>↗</span></a></div></div></div><Footer/></section>
  </main>;
}
