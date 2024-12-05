document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    if (name && email && service && message) {
        // Simulate sending data to a server
        setTimeout(function () {
            alert('Thank you, ' + name + '! Your message regarding ' + service + ' has been received.');
        }, 500);

        this.reset();  // Clear form after submission
    } else {
        alert('Please fill in all the fields.');
    }
});


// Gallery Carousel Functionality
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    const totalImages = images.length;
    let currentIndex = 0;

    function updateCarousel() {
        const imageWidth = images[0].clientWidth; 
        const offset = -currentIndex * imageWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }

    setInterval(nextImage, 5000); 
});