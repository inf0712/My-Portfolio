import React from 'react';
import { profile } from '../data/profile.js';

export default function Footer() { return <footer className="footer wrap"><a className="brand" href="#top">IJ<span>.</span></a><span className="mono">INFANT JOSEPH · INDIA</span><a className="mono" href={profile.github} target="_blank" rel="noreferrer">GITHUB ↗</a><a className="back-top mono" href="#top">BACK TO TOP ↑</a></footer>; }
