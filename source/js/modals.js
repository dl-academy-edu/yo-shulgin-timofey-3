const regForm = document.querySelector('.regForm--js');
const btn = document.querySelector('.register__button');
const closeBtn = document.querySelector('.register__form-close__btn');
const overlay = document.querySelector('.overlayOff');
const body = document.querySelector('.body_js');

btn.addEventListener('click', () => {
    regForm.classList.add('regForm--js-open');
    overlay.classList.add('overlay');
    body.classList.add('body_js__OH');
});

closeBtn.addEventListener('click', () => {
    regForm.classList.remove('regForm--js-open');
    overlay.classList.remove('overlay');
    body.classList.remove('body_js__OH');

});

overlay.addEventListener('click', () => {
    regForm.classList.remove('regForm--js-open');
    overlay.classList.remove('overlay');
    body.classList.remove('body_js__OH');
});

