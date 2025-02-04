window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})



document.querySelectorAll(".video-player").forEach(video => {
    const progressBar = video.nextElementSibling;

    video.addEventListener("loadedmetadata", () => {
        progressBar.max = video.duration; // 确保进度条最大值等于视频时长
    });

    video.addEventListener("timeupdate", () => {
        if (!isNaN(video.duration)) {
            progressBar.value = (video.currentTime / video.duration) * 100;
        }
    });

    progressBar.addEventListener("input", () => {
        video.currentTime = (progressBar.value / 100) * video.duration;
    });

    video.play().catch(error => console.log("Autoplay blocked:", error));
});

