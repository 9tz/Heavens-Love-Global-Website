// -------------------------------------
// Hero Section Animation
// -------------------------------------

// Fade in the hero section on page load with a slight delay.
document.addEventListener('DOMContentLoaded', function() {
    const heroTop = document.querySelector('.hero-top'); // Select the hero section
    
    setTimeout(() => {
        heroTop.classList.add('slide-in'); // Trigger fade-in and slide-down effect after 200ms
    }, 200);
});

// Scroll event for fading and sliding up the hero section as you scroll.
document.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get the current scroll position
    const heroTop = document.querySelector('.hero-top'); // Select the hero section
    const fadeStart = 50; 
    const fadeEnd = 300; 

    const progress = Math.min(Math.max((scrollTop - fadeStart) / (fadeEnd - fadeStart), 0), 1); // Calculate progress of scrolling
    
    heroTop.style.opacity = 1 - progress; // Adjust opacity based on scroll progress
    heroTop.style.transform = `translateY(-${progress * 100}px)`; // Adjust Y translation based on scroll progress
    
    // Add or remove fade-out class based on scroll progress
    if (progress >= 1) {
        heroTop.classList.add('fade-out');
    } else {
        heroTop.classList.remove('fade-out');
    }
});


// -------------------------------------
// Senior Pastor Section Fade-in on Scroll
// -------------------------------------

// Similar to the previous section, this script uses Intersection Observer for the senior pastor section fade effect.
document.addEventListener('DOMContentLoaded', () => {
    const seniorPastorSection = document.querySelector('.senior-pastor-section'); // Select the Senior Pastor section

    // Intersection Observer callback to trigger fade-in and fade-out based on scroll
    const handleScroll = (entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0.5) {
                seniorPastorSection.classList.add('fade-in'); // Trigger fade-in when more than 50% is in view
                seniorPastorSection.classList.remove('fade-out');
            } else if (entry.intersectionRatio < 0.5) {
                seniorPastorSection.classList.add('fade-out'); // Trigger fade-out when less than 50% is in view
                seniorPastorSection.classList.remove('fade-in');
            }
        });
    };

    const observer = new IntersectionObserver(handleScroll, { threshold: [0, 0.5, 1] }); // Different thresholds for different scroll effects

    // Start observing the Senior Pastor section
    observer.observe(seniorPastorSection);
});

// -------------------------------------
// Hero Section Slideshow Functionality
// -------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const heroTop = document.querySelector('.hero-top');
    const imagePaths = [
        '../assets/hero.png',
        '../assets/hero2.png',
        '../assets/hero3.png',
        // '../assets/hero4.png'
    ]; // List of images for the slideshow
    let currentImageIndex = 0;

    // Function to update the background image with a fade effect
    function updateBackgroundImage() {
        heroTop.style.opacity = 0; // Start with opacity 0 for a fade-out effect

        // After the fade-out transition, change the background image
        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % imagePaths.length; // Cycle through the images
            heroTop.style.backgroundImage = `url('${imagePaths[currentImageIndex]}')`;
            heroTop.style.opacity = 1; // Fade in the new image
        }, 400); // Match this to CSS transition duration
    }

    // Initial display setup for the first image
    heroTop.style.backgroundImage = `url('${imagePaths[currentImageIndex]}')`;
    heroTop.style.opacity = 1; // Initial fade-in

    // Set interval to update the image every 5 seconds (5000ms)
    setInterval(updateBackgroundImage, 5000);
});

