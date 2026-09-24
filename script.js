const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#nav');

navToggle.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!open));
  navToggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('open', !open);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open navigation');
  nav.classList.remove('open');
}));

const projects = [...document.querySelectorAll('.project')];
document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter').forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    projects.forEach((project) => project.classList.toggle('is-hidden', filter !== 'all' && project.dataset.category !== filter));
  });
});

document.querySelectorAll('.details-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const details = button.closest('.project').querySelector('.project-details');
    button.setAttribute('aria-expanded', String(!expanded));
    button.firstChild.textContent = expanded ? 'Details ' : 'Hide ';
    details.hidden = expanded;
  });
});

const copyButton = document.querySelector('#copy-email');
const copyStatus = document.querySelector('#copy-status');
copyButton.addEventListener('click', async () => {
  const address = 'infantj0712@gmail.com';
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(address);
    } else {
      const field = document.createElement('textarea');
      field.value = address;
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.append(field);
      field.select();
      document.execCommand('copy');
      field.remove();
    }
    copyButton.textContent = 'Copied';
    copyButton.classList.add('copied');
    copyStatus.textContent = 'Email copied to clipboard.';
    window.setTimeout(() => {
      copyButton.textContent = 'Copy email';
      copyButton.classList.remove('copied');
      copyStatus.textContent = '';
    }, 2200);
  } catch {
    copyStatus.textContent = 'Email: ' + address;
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();
const progress = document.querySelector('.top-progress span');
const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const revealTargets = document.querySelectorAll('.section-aside, .section-content, .project, .contact-wrap');
revealTargets.forEach((target) => target.classList.add('reveal'));
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, activeObserver) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      activeObserver.unobserve(entry.target);
    }
  }), { threshold: 0.1 });
  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add('visible'));
}
