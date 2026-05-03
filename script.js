// ===== PROMO BANNER =====
const promoBanner = document.getElementById('promo-banner');
const promoClose = document.getElementById('promo-close');
document.body.classList.add('promo-active');
promoClose.addEventListener('click', () => {
  promoBanner.classList.add('hidden');
  document.body.classList.remove('promo-active');
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  const isOpen = navLinks.classList.contains('open');
  spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
  spans[1].style.opacity = isOpen ? '0' : '';
  spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
});

// Close nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// ===== SCROLL ANIMATIONS =====
const animateElements = document.querySelectorAll(
  '.service-card, .portfolio-item, .testimonial-card, .step, .about-card, .skills-list, .channel, .highlight'
);
animateElements.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

animateElements.forEach(el => observer.observe(el));

// ===== CONTACT FORM =====
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.textContent = 'Enviando...';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('contact-form').reset();
    document.getElementById('form-success').classList.add('show');
    btn.textContent = 'Enviar Mensagem 🚀';
    btn.disabled = false;
    setTimeout(() => document.getElementById('form-success').classList.remove('show'), 5000);
  }, 1200);
}

// ===== SMOOTH ACTIVE LINK =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      link.style.color = scrollY >= top && scrollY < top + height ? '#fff' : '';
    }
  });
});
