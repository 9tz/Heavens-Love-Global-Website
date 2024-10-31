
// Sticky Menu Scroll to Sections
const menuLinks = document.querySelectorAll('.menu-bar a');

menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
        });
    });
});
