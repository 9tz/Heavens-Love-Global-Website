// Sticky Menu Functionality
window.addEventListener('scroll', function() {
    const menuBar = document.getElementById('menu-bar');
    const heroSectionBottom = document.querySelector('.hero').getBoundingClientRect().bottom;

    // Toggle sticky class based on scroll position
    if (window.scrollY > heroSectionBottom) {
        menuBar.classList.add('sticky');
    } else {
        menuBar.classList.remove('sticky');
    }
});

/* Scroll Animation */
window.addEventListener('scroll', () => {
    const merchImage = document.querySelector('.merch-people');
    const scrollY = window.scrollY;

    // Animation effect: Slight sliding and resizing based on scroll
    merchImage.style.transform = `translateX(${scrollY / 10}px) scale(${1 + scrollY / 5000})`;
});

document.getElementById("view-all-button").addEventListener("click", function () {
    document.getElementById("material-overlay").classList.add("active");
});

document.getElementById("close-overlay").addEventListener("click", function () {
    document.getElementById("material-overlay").classList.remove("active");
});
