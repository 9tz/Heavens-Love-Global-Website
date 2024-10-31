window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const heroSection = document.querySelector(".hero, .hero-min-arms");
    const logo = document.querySelector(".logo");
    const siteTitle = document.querySelector(".site-title");

    if (window.scrollY > 0) {
        navbar.style.height = "10vh";
        if (heroSection) {
            heroSection.style.marginTop = "10vh";
        }
        logo.style.height = "3rem"; // Smaller logo when scrolled
        siteTitle.style.fontSize = "1rem"; // Smaller title size when scrolled
    } else {
        navbar.style.height = "14vh";
        if (heroSection) {
            heroSection.style.marginTop = "14vh";
        }
        logo.style.height = "4rem"; // Larger logo at top
        siteTitle.style.fontSize = "1.5rem"; // Larger title size at top
    }
});
