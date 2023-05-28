(function() {
    const slider = document.querySelector('.slider');
    const wrapper = slider.querySelector('.slider__wrapper');
    const innerWrapper = wrapper.querySelector('.slider__inner-wrapper');
    const slides = [...innerWrapper.querySelectorAll('.slider__slide')];
    const slidesCount = slides.length;
    const pagination = slider.querySelector('.slider__pagination-js');
    const buttonBack = slider.querySelector('.slider__button-back-js');
    const buttonNext = slider.querySelector('.slider__button-next-js');

    const dots = [];

    let timer = null;
    let siledWidth = wrapper.offsetWidth;
    let activeSlideIndex = 0;

    initWidth();
    createDots();
    setActiveSlide(0);

    window.addEventListener('resize', () => {
        initWidth();
        setActiveSlide(activeSlideIndex);
    })

    buttonBack.addEventListener('click', () => {
        setActiveSlide(activeSlideIndex - 1);
    })

    buttonNext.addEventListener('click', () => {
        setActiveSlide(activeSlideIndex + 1);
    })

    function setActiveSlide(index, withAnimation = true) {
        if ( index < 0 || index >= slidesCount ) return;
        innerWrapper.style.transform = `translateX(${index * siledWidth * (-1)}px)`;
        
        buttonBack.removeAttribute('disabled');
        buttonNext.removeAttribute('disabled');

        if ( withAnimation )

        if ( index === 0) {
            buttonBack.setAttribute('disabled', 'disabled');
        }

        if ( index === slidesCount - 1 ) {
            buttonNext.setAttribute('disabled', 'disabled');
        }

        dots[activeSlideIndex].classList.remove('slider__dot_active');
        dots[index].classList.add('slider__dot_active');
        activeSlideIndex = index;
    }

    function initWidth() {
        siledWidth = wrapper.offsetWidth;

        slides.forEach(slide => {
            slide.style.width = `${siledWidth}px`
        });
    }

    function createDots() {
        for ( let i = 0; i < slidesCount; i++ ) {
            const dot = createDot(i);
            dots.push(dot);
            pagination.insertAdjacentElement('beforeend', dot);
        }
    }

    function createDot(index) {
        const dot = document.createElement('button');
        dot.classList.add('.slider__dot');

        if ( index === setActiveSlide ) {
            dot.classList.add('slider__dot_active')
        }

        dot.addEventListener('click', () => {
            setActiveSlide(index);
        })
        return dot;
    }
})();