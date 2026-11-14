import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const commands = [{ label: 'Home', path: '/' }, { label: 'Selected work', path: '/work' }, { label: 'About Infant', path: '/about' }, { label: 'Technical experiments', path: '/lab' }, { label: 'Contact', path: '/contact' }];

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState(''); const input = useRef(null); const navigate = useNavigate();
  useEffect(() => { if (open) { setQuery(''); input.current?.focus(); } }, [open]);
  useEffect(() => { const key = (event) => { if (event.key === 'Escape') onClose(); }; window.addEventListener('keydown', key); return () => window.removeEventListener('keydown', key); }, [onClose]);
  if (!open) return null;
  const matches = commands.filter((command) => command.label.toLowerCase().includes(query.toLowerCase()));
  return <div className="palette-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><section className="palette" role="dialog" aria-modal="true" aria-label="Command palette"><div className="palette-search"><span>⌕</span><input ref={input} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Where do you want to go?" /><kbd>ESC</kbd></div><div className="palette-list">{matches.map((command) => <button key={command.path} onClick={() => { navigate(command.path); onClose(); }}>{command.label}<span>↗</span></button>)}{!matches.length && <p>No matching pages.</p>}</div><footer><span>↑↓ NAVIGATE</span><span>ENTER OPEN</span><span>ESC CLOSE</span></footer></section></div>;
}
