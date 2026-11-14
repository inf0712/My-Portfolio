import React, { useState } from 'react';

const links = [['WORK', '#work'], ['ABOUT', '#about'], ['CAPABILITIES', '#capabilities'], ['CONTACT', '#contact']];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="topbar"><a className="brand" href="#top">IJ<span>.</span></a><nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav><button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><span/><span/></button></header>;
}
