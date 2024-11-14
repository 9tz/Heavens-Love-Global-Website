window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const heroSection = document.querySelector(".hero, .hero-min-arms");
    const logo = document.querySelector(".logo");
    const siteTitle = document.querySelector(".site-title");

    if (window.scrollY > 0) {
        navbar.style.height = "10vh";
        if (heroSection) {
            navbar.style.height = "2rem";
        }
        logo.style.height = "3rem"; // Smaller logo when scrolled
        siteTitle.style.fontSize = "1rem"; // Smaller title size when scrolled
    } else {
        navbar.style.height = "13vh";
        if (heroSection) {
            navbar.style.marginTop = "0rem";
        }
        logo.style.height = "4rem"; // Larger logo at top
        siteTitle.style.fontSize = "1.5rem"; // Larger title size at top
    }
});

// Selecting the hamburger menu icon and mobile menu
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle mobile menu visibility when hamburger icon is clicked
hamburgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('menu-visible');
});

// Close the mobile menu when a link is clicked
const mobileMenuLinks = document.querySelectorAll('#mobile-menu ul li a');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-visible');
  });
});  