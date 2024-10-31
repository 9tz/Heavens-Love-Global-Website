document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("brochureVideo");
    const videoSection = document.querySelector(".video-section");

    function checkVideoPlay() {
        const rect = videoSection.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isInView) {
            video.play();
        } else {
            video.pause();
        }
    }

    window.addEventListener("scroll", checkVideoPlay);
    checkVideoPlay(); // Initial check on load
});
