const swipers = [];
document.querySelectorAll('.swiper-container').forEach(container => {
    const paginationSelector = container.dataset.pagination;
    const swiper = new Swiper(container, {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: paginationSelector,
            clickable: true,
        },
    });
    swipers.push(swiper);
});

// Force Swiper to recalc when resizing (optional)
window.addEventListener('resize', () => {
    swipers.forEach(swiper => swiper.update());
});
