const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});

// Mobile dropdown toggle
document.querySelectorAll('#mobile-nav .dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', e => {
        e.preventDefault();
        const parentLi = toggle.parentElement;
        parentLi.classList.toggle('active');
    });
});