// Menu toggle para móviles
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Tabs de flota
const tabButtons = document.querySelectorAll('.tab-button');
const camionesGrid = document.getElementById('camiones-grid');
const plataformasGrid = document.getElementById('plataformas-grid');

if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            if (button.dataset.tab === 'camiones') {
                camionesGrid.style.display = 'grid';
                plataformasGrid.style.display = 'none';
            } else {
                camionesGrid.style.display = 'none';
                plataformasGrid.style.display = 'grid';
            }
        });
    });
}

// Animaciones de scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Formulario de contacto
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const empresa = document.getElementById('empresa').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // Crear mensaje de WhatsApp
        const whatsappMessage = `*Solicitud de Cotización - Transportes REMY*%0A%0A*Nombre:* ${nombre}%0A*Empresa:* ${empresa || 'No especificada'}%0A*Teléfono:* ${telefono}%0A*Email:* ${email}%0A%0A*Mensaje:*%0A${mensaje}`;
        
        // Abrir WhatsApp (Cambiar 584121234567 por tu número real)
        window.open(`https://wa.me/584121234567?text=${whatsappMessage}`, '_blank');
        
        // Limpiar formulario
        e.target.reset();
        
        alert('¡Gracias por contactarnos! Te estamos redirigiendo a WhatsApp para completar tu solicitud.');
    });
}

// Formulario de producto
const productForm = document.getElementById('product-form');
if (productForm) {
    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const empresa = document.getElementById('empresa').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        const vehiculo = document.querySelector('.product-content h1')?.textContent || 'Vehículo';

        // Crear mensaje de WhatsApp
        const whatsappMessage = `*Consulta sobre ${vehiculo} - Transportes REMY*%0A%0A*Nombre:* ${nombre}%0A*Empresa:* ${empresa || 'No especificada'}%0A*Teléfono:* ${telefono}%0A*Email:* ${email}%0A%0A*Mensaje:*%0A${mensaje}`;
        
        // Abrir WhatsApp (Cambiar 584121234567 por tu número real)
        window.open(`https://wa.me/584121234567?text=${whatsappMessage}`, '_blank');
        
        // Limpiar formulario
        e.target.reset();
        
        alert('¡Gracias por tu consulta! Te estamos redirigiendo a WhatsApp.');
    });
}

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
