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

// Show Event Details on Button Click
const eventOverlay = document.getElementById('event-overlay');
const eventImage = document.getElementById('event-image');
const closeOverlay = document.getElementById('close-overlay');

document.getElementById('btn-cnow').addEventListener('click', function() {
    eventImage.src = 'assets/programmes-event-cnow.png';
    eventOverlay.style.display = 'flex';
});

document.getElementById('btn-som').addEventListener('click', function() {
    eventImage.src = 'assets/programmes-event-som.png';
    eventOverlay.style.display = 'flex';
});

document.getElementById('btn-retreat').addEventListener('click', function() {
    eventImage.src = 'assets/programmes-event-retreat.png';
    eventOverlay.style.display = 'flex';
});

closeOverlay.addEventListener('click', function() {
    eventOverlay.style.display = 'none';
});
