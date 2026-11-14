import React, { useCallback, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CommandPalette from './components/CommandPalette.jsx';
import Home from './pages/Home.jsx';
import { About, Contact, Experience, Lab, ProjectDetails, Skills, Work } from './pages/Pages.jsx';

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [light, setLight] = useState(false);
  const location = useLocation();
  const closePalette = useCallback(() => setPaletteOpen(false), []);
  useEffect(() => {
    const onKey = (event) => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setPaletteOpen(true); } };
    window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey);
  }, []);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [location.pathname]);
  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); reveal.unobserve(entry.target); } }), { threshold: .1 });
    document.querySelectorAll('.reveal').forEach((element) => reveal.observe(element));
    return () => reveal.disconnect();
  }, [location.pathname]);
  return <div className={`site-shell ${light ? 'light-theme' : ''}`}><Navbar onCommand={() => setPaletteOpen(true)}/><button className="theme-toggle mono" onClick={() => setLight(!light)} aria-label="Toggle color theme">{light ? 'DARK' : 'LIGHT'} <span>◐</span></button><Routes><Route path="/" element={<Home/>}/><Route path="/work" element={<Work/>}/><Route path="/work/:slug" element={<ProjectDetails/>}/><Route path="/about" element={<About/>}/><Route path="/experience" element={<Experience/>}/><Route path="/lab" element={<Lab/>}/><Route path="/contact" element={<Contact/>}/><Route path="/skills" element={<Skills/>}/><Route path="*" element={<Work/>}/></Routes><Footer/><button className="to-top mono" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">↑</button><CommandPalette open={paletteOpen} onClose={closePalette}/></div>;
}
