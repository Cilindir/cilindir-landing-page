document.querySelectorAll('.swiper-container').forEach(container => {
    const paginationSelector = container.dataset.pagination;
    new Swiper(container, {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: paginationSelector,
            clickable: true,
        },
        breakpoints: {
            1100: {
                enabled: false,
            },
        },
    });
});
