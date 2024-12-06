function startSlides(activeSlide) {
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active');

    slides.forEach(function(slide, i) {
        slide.addEventListener('click', () => {
            clearActiveClasses();
            slide.classList.add('active')
        });
    })

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        })
    }
}

startSlides(2);