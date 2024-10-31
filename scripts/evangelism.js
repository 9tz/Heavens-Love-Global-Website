document.getElementById('open-newsletter').addEventListener('click', function() {
    document.getElementById('newsletter-overlay').style.display = 'flex';
});

document.getElementById('close-newsletter').addEventListener('click', function() {
    document.getElementById('newsletter-overlay').style.display = 'none';
});

document.getElementById('scroll-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
