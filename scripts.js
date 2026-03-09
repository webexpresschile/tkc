// Teknocopy – Scripts principales
// teknocopy.cl

// ── NAV SCROLL SHADOW ──
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ── MOBILE MENU ──
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') document.getElementById('mobileMenu').classList.remove('open');
});

// ── TABS ──
function switchTab(id, btn) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

// ── FORM CTA ──
function submitForm(e) {
  if (e) e.preventDefault();

  const fields = {
    nombre: document.getElementById('inputNombre'),
    apellido: document.getElementById('inputApellido'),
    telefono: document.getElementById('inputTelefono'),
    email: document.getElementById('emailInput'),
  };

  let valid = true;

  // Validar campos requeridos
  Object.values(fields).forEach(input => {
    if (!input) return;
    input.classList.remove('error');
    if (!input.value.trim()) {
      input.classList.add('error');
      valid = false;
    }
  });

  // Validar formato email
  if (fields.email && fields.email.value && !fields.email.value.includes('@')) {
    fields.email.classList.add('error');
    valid = false;
  }

  if (!valid) {
    // Shake en el primer campo inválido
    const firstError = document.querySelector('.cta-field input.error, .cta-field textarea.error');
    if (firstError) firstError.focus();
    return;
  }

  const toast = document.getElementById('toast');
  if (toast) { toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 4500); }

  // Limpiar formulario
  Object.values(fields).forEach(input => { if (input) input.value = ''; });
  const comentarios = document.getElementById('inputComentarios');
  if (comentarios) comentarios.value = '';
}


// ── ANIMATE ON SCROLL ──
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.product-card, .way-card, .sector-card, .testimonial-card, .t-step').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
  fadeObserver.observe(el);
});

// ── PROGRESS BARS ──
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.progress-bar-fill').forEach(bar => {
        const w = bar.dataset.width || bar.style.width;
        bar.dataset.width = w;
        bar.style.width = '0';
        setTimeout(() => { bar.style.width = w; }, 250);
      });
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.tab-visual, .timeline-table-wrap').forEach(el => barObserver.observe(el));

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.getElementById('mobileMenu').classList.remove('open');
    }
  });
});

// ── VANILLA TILT 3D EFFECT ──
if (typeof VanillaTilt !== 'undefined') {
  VanillaTilt.init(document.querySelectorAll(".product-card, .way-card, .sector-card, .testimonial-card"), {
    max: 8,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
    scale: 1.02
  });
}
