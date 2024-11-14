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
    // Define the base names of the hero images
    const imageBases = ['hero1'];
    let currentImageIndex = 0;

    // Function to determine the appropriate image suffix based on screen width
    function getImageSuffixForWidth(width) {
        if (width < 576) {
            return '-360px';
        } else if (width < 768) {
            return '-576px';
        } else if (width < 992) {
            return '-768px';
        } else if (width < 1200) {
            return '-992px';
        } else {
            return '-1200px';
        }
    }

    // Function to update the background image with a fade effect
    function updateBackgroundImage() {
        heroTop.style.opacity = 0; // Start with opacity 0 for a fade-out effect

        // After the fade-out transition, change the background image
        setTimeout(() => {
            const screenWidth = window.innerWidth;
            const imageSuffix = getImageSuffixForWidth(screenWidth);
            currentImageIndex = (currentImageIndex + 1) % imageBases.length; // Cycle through the images
            
            // Construct the new image path based on the base name and breakpoint suffix
            const newImagePath = `../assets/${imageBases[currentImageIndex]}${imageSuffix}.png`;
            heroTop.style.backgroundImage = `url('${newImagePath}')`;
            heroTop.style.opacity = 1; // Fade in the new image
        }, 400); // Match this to CSS transition duration
    }

    // Initial display setup for the first image
    function setInitialImage() {
        const screenWidth = window.innerWidth;
        const imageSuffix = getImageSuffixForWidth(screenWidth);
        const initialImagePath = `../assets/${imageBases[currentImageIndex]}${imageSuffix}.png`;
        heroTop.style.backgroundImage = `url('${initialImagePath}')`;
        heroTop.style.opacity = 1; // Initial fade-in
    }

    // Call initial image setup
    setInitialImage();

    // Create a variable for the slideshow interval
    let slideshowInterval = setInterval(updateBackgroundImage, 5000);

    // Update the background image on window resize to load appropriate image for new viewport width
    window.addEventListener('resize', () => {
        // Clear the existing interval
        clearInterval(slideshowInterval);

        // Update the image to adjust to the new size immediately
        setInitialImage();

        // Restart the slideshow interval
        slideshowInterval = setInterval(updateBackgroundImage, 5000);
    });
});
