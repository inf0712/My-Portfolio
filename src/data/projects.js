export const projects = [
  {
    slug: 'linux-monitoring', number: '01', year: '2026', category: 'INFRASTRUCTURE',
    title: 'Linux Server Monitoring and Alerting System', shortTitle: 'Linux Server\nMonitoring & Alerting',
    description: 'A Bash script checks CPU, memory and disk use, then raises alerts when configured thresholds are exceeded.',
    flow: ['CPU / MEM / DISK', 'THRESHOLD CHECK', 'SYSTEM ALERT'],
    details: ['Tracks CPU utilization.', 'Tracks memory utilization.', 'Tracks disk utilization.', 'Implements threshold-based checks.', 'Identifies resource utilization issues and automates system health alerts.'],
    technologies: ['Linux', 'Bash', 'Shell Scripting'], kind: 'terminal',
  },
  {
    slug: 'braille-recognition', number: '02', year: '2026', category: 'AI / ACCESSIBILITY',
    title: 'Braille Script to Speech Conversion', shortTitle: 'Braille Script\nto Speech',
    description: 'An image-based recognition pipeline uses OpenCV preprocessing and an RNN with CTC loss, then reads recognized text aloud.',
    flow: ['BRAILLE IMAGE', 'OPENCV', 'RNN + CTC', 'SPEECH'],
    details: ['OpenCV image preprocessing.', 'Recurrent neural network with CTC loss for sequence prediction.', 'Text-to-speech integration.', '88.67% word recognition and 97.66% character recognition.'],
    result: 'Reported recognition: 88.67% word · 97.66% character.',
    technologies: ['Python', 'OpenCV', 'Neural Networks', 'CTC', 'Text-to-Speech'], kind: 'braille',
  },
  {
    slug: 'alumni-management', number: '03', year: '2025', category: 'WEB APPLICATION',
    title: 'Alumni Management System', shortTitle: 'Alumni Management\nSystem',
    description: 'A PHP and MySQL application for alumni records, with authentication, CRUD operations and separate administrator and alumni modules.',
    flow: ['AUTHENTICATION', 'ROLE MODULES', 'ALUMNI RECORDS'],
    details: ['User authentication.', 'CRUD operations.', 'Separate administrator and alumni modules.', 'Role-based functionality.'],
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'], kind: 'directory',
  },
];

export const categories = ['ALL', ...new Set(projects.map((project) => project.category))];
