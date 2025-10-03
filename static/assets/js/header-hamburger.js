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

// Close mobile nav when clicking outside
document.addEventListener("click", (e) => {
    // Check if click is outside mobile nav and hamburger
    if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
        mobileNav.classList.remove("active");
        // Close any open dropdowns
        document.querySelectorAll('#mobile-nav li.active').forEach(li => li.classList.remove('active'));
    }
});
