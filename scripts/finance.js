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

// Show/Hide Other Reason Input Field
document.getElementById("other").addEventListener("change", function() {
    document.getElementById("other-reason").style.display = "block";
});

document.querySelectorAll("input[name='partnership']").forEach(radio => {
    radio.addEventListener("change", function() {
        if (this.value !== "Other") {
            document.getElementById("other-reason").style.display = "none";
        }
    });
});
