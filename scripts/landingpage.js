// -------------------------------------
// Navbar Loading and Smooth Scroll Setup
// -------------------------------------

// This function loads the navbar from an external file and applies smooth scrolling for anchor links.
document.addEventListener('DOMContentLoaded', () => {
    fetch('/components/navbar.html') // Fetch the external navbar HTML
        .then(response => response.text()) // Parse response to text
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data; // Insert navbar into the placeholder

            // Apply smooth scroll behavior for all navbar anchor links
            const navLinks = document.querySelectorAll('nav a[href^="#"]');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault(); // Prevent default jump to section behavior
                    
                    const targetId = this.getAttribute('href'); // Get target section ID
                    const targetSection = document.querySelector(targetId); // Select the target section
                    
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth', // Smooth scrolling
                            block: 'start' // Scroll to the start of the section
                        });
                    }
                });
            });
        });
});

// -------------------------------------
// Image Slider Functionality
// -------------------------------------

// This part handles the logic for the image slider, including showing slides and cycling through them.
const slides = document.querySelectorAll('.slide'); // Select all slides
const indicators = document.querySelectorAll('.indicator'); // Select all indicators
let currentSlide = 0; // Set the initial slide index

// Function to show a specific slide by index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index); // Activate the slide matching the index
    });
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index); // Activate the indicator matching the index
    });
    currentSlide = index; // Update the current slide index
}

// Function to move to the next slide
function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length; // Calculate the next slide index
    showSlide(nextIndex); // Show the next slide
}

// Attach event listeners to indicators for direct navigation
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index); // Show the slide corresponding to the clicked indicator
    });
});

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
// Carousel (Programs Section) Functionality
// -------------------------------------

// This part handles the left and right scrolling of the programs carousel.
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.programs-carousel'); // Select the carousel container
    const leftArrow = document.querySelector('.scroll-arrow.left'); // Select the left scroll arrow
    const rightArrow = document.querySelector('.scroll-arrow.right'); // Select the right scroll arrow

    // Scroll right by 320px when the right arrow is clicked
    rightArrow.addEventListener('click', () => {
        carousel.scrollBy({
            left: 320, // Scroll 320px to the right
            behavior: 'smooth'
        });
    });

    // Scroll left by 320px when the left arrow is clicked
    leftArrow.addEventListener('click', () => {
        carousel.scrollBy({
            left: -320, // Scroll 320px to the left
            behavior: 'smooth'
        });
    });
});

// -------------------------------------
// Section Fade-in on Scroll (Whats On and Publishing Sections)
// -------------------------------------

// Use Intersection Observer to trigger fade-in animations for the "Whats On" and "Publishing" sections.
document.addEventListener('DOMContentLoaded', function() {
    // const whatsOnContent = document.querySelector('.whats-on-content'); // Select "Whats On" content
    // const whatsOnText = document.querySelector('.whats-on-text'); // Select "Whats On" text
    // const whatsOnButton = document.querySelector('.whats-on-button-outline'); // Select "Whats On" button
    const publishingSection = document.querySelector('.publishing-section'); // Select "Publishing" section
    const pubText = document.querySelector('.publishing-text'); // Select "Publishing" text
    const pubButton = document.querySelector('.pub-button'); // Select "Publishing" button

    // Intersection Observer callback to trigger animation when element enters view
    const animateIn = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation classes based on the intersecting element
                if (entry.target === whatsOnContent) {
                    whatsOnContent.classList.add('animate-in');
                    whatsOnText.classList.add('animate-in');
                    whatsOnButton.classList.add('animate-in');
                } else if (entry.target === publishingSection) {
                    publishingSection.classList.add('animate-in');
                    pubText.classList.add('animate-in');
                    pubButton.classList.add('animate-in');
                }
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    };

    const observer = new IntersectionObserver(animateIn, { threshold: 0.5 }); // Trigger animation when 50% of element is in view

    // Start observing sections
    // observer.observe(whatsOnContent);
    observer.observe(publishingSection);
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
// YouTube Player Animation on Scroll
// -------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const youtubePlayer = document.querySelector('.youtube-player'); // Select the YouTube player container

    // Intersection Observer callback to trigger animation when the player is in view
    const animateYoutubePlayer = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                youtubePlayer.classList.add('animated'); // Add 'animated' class when in view
                observer.unobserve(entry.target); // Stop observing after the animation is triggered
            }
        });
    };

    // Create an Intersection Observer to watch for when the YouTube player enters the viewport
    const observer = new IntersectionObserver(animateYoutubePlayer, { threshold: 0.5 }); // Trigger animation when 50% of the player is visible

    observer.observe(youtubePlayer); // Start observing the YouTube player
});

document.addEventListener('DOMContentLoaded', function () {
    const tbaImage = document.querySelector('.tba-programmes img'); // Select the image

    // Intersection Observer callback to trigger animation when the image enters the viewport
    const animateImage = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tbaImage.classList.add('animate-in'); // Add animation class
                observer.unobserve(entry.target); // Stop observing after animation is triggered
            }
        });
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver(animateImage, { threshold: 0.5 }); // Trigger when 50% of image is visible

    // Start observing the image
    observer.observe(tbaImage);
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

