import React from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile.js';

export default function Footer() { return <footer className="footer wrap"><Link className="brand" to="/">INFANT JOSEPH<span>.</span></Link><span className="mono">BUILD. AUTOMATE. UNDERSTAND.</span><a className="mono" href={profile.github} target="_blank" rel="noreferrer">GITHUB ↗</a><a className="back-top mono" href="#top">BACK TO TOP ↑</a></footer>; }
