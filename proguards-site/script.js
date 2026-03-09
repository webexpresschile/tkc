// 1) “Linterna” en títulos: actualiza variables CSS para mover el foco
function initTorchTitles() {
  const titles = document.querySelectorAll('.torch-title');
  titles.forEach((el) => {
    const setCenter = () => {
      el.style.setProperty('--mx', '50%');
      el.style.setProperty('--my', '50%');
    };

    setCenter();

    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width) * 100;
      const my = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty('--mx', `${mx}%`);
      el.style.setProperty('--my', `${my}%`);
    });

    el.addEventListener('mouseleave', setCenter);
  });
}

// 2) Parallax suave SOLO del fondo del hero (no mueve el header completo)
function initHeroParallax() {
  const bg = document.querySelector('.hero-bg');
  if (!bg) return;

  const mq = window.matchMedia('(min-width: 768px)');
  if (!mq.matches) return;

  let ticking = false;
  const speed = 0.18;

  function update() {
    const y = window.scrollY * speed;
    bg.style.transform = `translate3d(0, ${y}px, 0) scale(1.05)`;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  });
}

// 3) Demo submit
function initLeadForm() {
  const form = document.getElementById('leadForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias! Te contactaremos en breve.');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTorchTitles();
  initHeroParallax();
  initLeadForm();
});
