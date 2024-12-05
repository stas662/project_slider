function startSlides(activeSlide) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    slides[activeSlide].classList.add('active');
    dots[activeSlide].classList.add('activeDot');

    slides.forEach(function(slide, i) {
        slide.addEventListener('click', () => {
            clearActiveClasses();
            slide.classList.add('active')
            dots[i].classList.add('activeDot')
        });
    })

    dots.forEach(function(dot, i) {
        dot.addEventListener('click', () => {
            clearActiveClasses();
            dot.classList.add('activeDot')
            slides[i].classList.add('active')
        });
    })

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        })
        dots.forEach((dot) => {
            dot.classList.remove('activeDot');
        })
    }
}

startSlides(2);