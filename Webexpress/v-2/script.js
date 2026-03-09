const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const caption = document.getElementById('caption');
const galleryItems = document.querySelectorAll('.gallery-item');
const closeBtn = document.querySelector('.close-btn');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const text = item.getAttribute('data-caption');
        
        lightbox.style.display = 'flex';
        setTimeout(() => lightbox.classList.add('active'), 10);
        lightboxImg.src = img.src;
        caption.innerText = text;
    });
});

const closeLightbox = () => {
    lightbox.classList.remove('active');
    setTimeout(() => lightbox.style.display = 'none', 300);
};

closeBtn.addEventListener('click', closeLightbox);

// Cerrar al hacer clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg && e.target !== caption) {
        closeLightbox();
    }
});

// Cerrar con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});