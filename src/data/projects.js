export const projects = [
  {
    slug: 'linux-monitoring', number: '01', year: '2026', category: 'INFRASTRUCTURE',
    title: 'Linux Server Monitoring and Alerting System', shortTitle: 'Linux Server\nMonitoring & Alerting',
    description: 'A Bash-based monitoring tool designed to track important system resources and identify potential resource utilization problems.',
    details: ['Tracks CPU utilization.', 'Tracks memory utilization.', 'Tracks disk utilization.', 'Implements threshold-based checks.', 'Identifies resource utilization issues and automates system health alerts.'],
    technologies: ['Linux', 'Bash', 'Shell Scripting'], kind: 'terminal',
  },
  {
    slug: 'braille-recognition', number: '02', year: '2026', category: 'AI / ACCESSIBILITY',
    title: 'Braille Script to Speech Conversion', shortTitle: 'Braille Script\nto Speech',
    description: 'An image-based Braille recognition project that converts recognized Braille content into speech using image processing and deep learning.',
    details: ['OpenCV image preprocessing.', 'Recurrent neural network with CTC loss for sequence prediction.', 'Text-to-speech integration.', '88.67% word recognition and 97.66% character recognition.'],
    technologies: ['Python', 'OpenCV', 'Neural Networks', 'CTC', 'Text-to-Speech'], kind: 'braille',
  },
  {
    slug: 'alumni-management', number: '03', year: '2025', category: 'WEB APPLICATION',
    title: 'Alumni Management System', shortTitle: 'Alumni Management\nSystem',
    description: 'A PHP and MySQL application designed to manage alumni information through separate administrator and alumni modules.',
    details: ['User authentication.', 'CRUD operations.', 'Separate administrator and alumni modules.', 'Role-based functionality.'],
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'], kind: 'directory',
  },
];

export const categories = ['ALL', ...new Set(projects.map((project) => project.category))];
