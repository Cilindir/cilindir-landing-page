// Set height of hero images dynamically based on width
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.hero-container .swiper-slide img');
    let widest = 0;

    // Find the natural width of the widest image
    slides.forEach(img => {
        if (img.naturalWidth > widest) {
            widest = img.naturalWidth;
        }
    });

    // Get container width
    const containerWidth = document.querySelector('.hero-container .swiper-container').clientWidth;

    // Calculate scaling factor
    const scale = Math.min(1, containerWidth / widest);

    // Set uniform height for all images
    slides.forEach(img => {
        img.style.height = `${img.naturalHeight * scale}px`;
        img.style.width = 'auto';
        img.style.display = 'block';
        img.style.margin = '0 auto';
    });
});