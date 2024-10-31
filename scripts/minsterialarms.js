// // Smooth scrolling for navigation menu buttons
// document.querySelectorAll('.menu-btn').forEach(button => {
//     button.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetSection = document.querySelector(this.getAttribute('href'));
//         if (targetSection) {
//             window.scrollTo({
//                 top: targetSection.offsetTop,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Define observer options
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of the element is in view
    };

    // Callback function for Intersection Observer
    const onIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class to start animations when the section is in view
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target); // Stop observing after the animation starts
            }
        });
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(onIntersection, observerOptions);

    // Observe all sections that should animate on scroll
    document.querySelectorAll(
        ".hero-min-arms, .nav-menu-section, .music-ministry-section, .join-music-ministry-section, \
        .publishing-ministry-section, .join-publishing-ministry-section, \
        .networks-ministry-section, .join-networks-ministry-section, \
        .holdings-ministry-section, .join-holdings-ministry-section, \
        .up-ministry-section, .join-up-ministry-section, \
        .secretariat-ministry-section, .join-secretariat-ministry-section, \
        .evangelism-ministry-section, .join-evangelism-ministry-section, \
        .cell-ministry-section, .join-cell-ministry-section, \
        .finance-ministry-section, .join-finance-ministry-section"
    ).forEach(section => {
        observer.observe(section);
    });
});
