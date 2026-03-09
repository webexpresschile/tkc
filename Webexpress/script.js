document.addEventListener('DOMContentLoaded', () => {
  const PHONE = '56973027813'; // cambia a tu número real (sin +)

  // Navbar burger
  const burgers = Array.from(document.querySelectorAll('.navbar-burger'));
  burgers.forEach((burger) => {
    burger.addEventListener('click', () => {
      const targetId = burger.dataset.target;
      const target = document.getElementById(targetId);
      burger.classList.toggle('is-active');
      target?.classList.toggle('is-active');
    });
  });

  // Modal (Bulma: .modal + .is-active)
  const modal = document.getElementById('modal');
  const open1 = document.getElementById('btnOpenModal');
  const open2 = document.getElementById('btnOpenModal2');
  const closeBtn = document.getElementById('btnCloseModal');
  const modalBg = modal?.querySelector('.modal-background');

  function openModal() { modal?.classList.add('is-active'); }
  function closeModal() { modal?.classList.remove('is-active'); }

  open1?.addEventListener('click', openModal);
  open2?.addEventListener('click', openModal);
  closeBtn?.addEventListener('click', closeModal);
  modalBg?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Scroll pricing
  const pricingBtn = document.getElementById('btnScrollPricing');
  const pricing = document.getElementById('pricing_section');
  pricingBtn?.addEventListener('click', () => {
    pricing?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // WA float sync
  const waFloat = document.getElementById('whatsFloat');
  if (waFloat) waFloat.href = `https://wa.me/${PHONE}`;

  // Form -> WhatsApp
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullname = document.getElementById('fullname')?.value.trim();
    const business = document.getElementById('business_name')?.value.trim();
    const category = document.getElementById('business_category')?.value.trim();
    const whatsapp = document.getElementById('whatsapp')?.value.trim();
    const email = document.getElementById('email')?.value.trim();

    if (!fullname || !business || !category || !whatsapp || !email) {
      alert('Completa todos los campos.');
      return;
    }

    const message =
      `🚀 *SOLICITUD WEB EXPRESS 72H*\n\n` +
      `👤 *Cliente:* ${fullname}\n` +
      `🏢 *Negocio:* ${business}\n` +
      `🏷️ *Rubro:* ${category}\n` +
      `📱 *WhatsApp:* ${whatsapp}\n` +
      `📧 *Correo:* ${email}\n\n` +
      `💰 *Plan:* $99.990 CLP (Pago único, IVA incluido)\n` +
      `⏰ *Entrega:* 72 horas hábiles\n\n` +
      `_Quiero coordinar el pago y enviar la info para empezar._`;

    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, '_blank');
    closeModal();
    form.reset();
  });
});
