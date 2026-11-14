import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { profile } from '../data/profile.js';

const links = [['WORK', '/work'], ['ABOUT', '/about'], ['SKILLS', '/skills'], ['LAB', '/lab'], ['CONTACT', '/contact']];

export default function Navbar({ onCommand }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location]);
  return <header className="topbar"><Link className="brand" to="/" aria-label="Infant Joseph home">INFANT JOSEPH<span>.</span></Link><span className="nav-role mono">CLOUD / DEVOPS / INFRASTRUCTURE</span><button className="menu-toggle" aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}><span/><span/></button><nav className={`nav ${open ? 'open' : ''}`} aria-label="Main navigation">{links.map(([label, to]) => <NavLink key={label} to={to} className={({ isActive }) => `${isActive ? 'active' : ''}`}>{label}</NavLink>)}<button className="nav-tool" onClick={onCommand} aria-label="Open command palette">⌘K</button></nav><span className="nav-location mono">{profile.location.toUpperCase()}</span></header>;
}
