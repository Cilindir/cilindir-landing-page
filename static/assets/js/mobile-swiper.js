
function initSwiper(containerClass, paginationClass) {
    return new Swiper(containerClass, {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: paginationClass,
            clickable: true,
        },
        breakpoints: {
            1100: {
                enabled: false,
            },
        },
    });
}

const welcomeSwiper = initSwiper('.welcome-carousel', '.welcome-pagination');
const costSwiper = initSwiper('.cost-carousel', '.cost-pagination');
const remoteConfSwiper = initSwiper('.remote-conferencing-carousel', '.remote-conferencing-pagination');
const aiConferencingSwiper = initSwiper('.ai-conferencing-carousel', '.ai-conferencing-pagination');
const applicationSwiper = initSwiper('.application-carousel', '.application-pagination');
const pricingSwiper = initSwiper('.pricing-carousel', '.pricing-pagination');
const founderSwiper = initSwiper('.founder-carousel', '.founder-pagination');
