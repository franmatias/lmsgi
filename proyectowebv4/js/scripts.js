document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('.nav');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const starRatingForm = document.getElementById('encuesta');
    const ratingResult = document.getElementById('rating-result');

    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('no-search');
    });

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('.fa-moon').classList.toggle('fa-sun');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Load and display the average rating
    const loadRating = () => {
        const votes = JSON.parse(localStorage.getItem('votes')) || [];
        if (votes.length > 0) {
            const average = votes.reduce((sum, vote) => sum + vote, 0) / votes.length;
            ratingResult.textContent = `Valoración media: ${average.toFixed(1)} (${votes.length} votos)`;
        } else {
            ratingResult.textContent = 'No hay votos aún.';
        }
    };

    // Handle star rating form submission
    starRatingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const selectedRating = parseInt(starRatingForm.querySelector('input[name="best-villain"]:checked').value);
        const votes = JSON.parse(localStorage.getItem('votes')) || [];
        votes.push(selectedRating);
        localStorage.setItem('votes', JSON.stringify(votes));
        loadRating();
    });

    loadRating();

    // Slideshow functionality
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 10000); // Change image every 2 seconds
    }
});