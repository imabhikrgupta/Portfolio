// ==========================================================
// Mobile nav toggle
// ==========================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav after clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ==========================================================
// Scroll progress rail
// ==========================================================
const progressFill = document.getElementById('progressFill');

function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressFill.style.width = pct + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

// ==========================================================
// Active nav link on scroll (scrollspy)
// ==========================================================
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

function setActiveLink() {
  let current = sections[0]?.id;
  const scrollPos = window.scrollY + 140;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop) {
      current = section.id;
    }
  });

  navItems.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}
window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

// ==========================================================
// Scroll reveal for sections
// ==========================================================
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

// ==========================================================
// Footer year
// ==========================================================
document.getElementById('year').textContent = new Date().getFullYear();
