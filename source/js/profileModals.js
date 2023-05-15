const editPass = document.querySelector('.edit__password__js');
const editCloseBtn = document.querySelector('.edit__password__form-close__btn');
const editBtnOpen = document.querySelector('.profile__button-changePassword');
const overlayS = document.querySelector('.overlayOffS');

editBtnOpen.addEventListener('click', () => {
    editPass.classList.add('edit__password__js-open');
    overlayS.classList.add('overlayS');
});

editCloseBtn.addEventListener('click', () => {
    editPass.classList.remove('edit__password__js-open');
    overlayS.classList.remove('overlayS');
});

overlayS.addEventListener('click', () => {
    editPass.classList.remove('edit__password__js-open');
    overlayS.classList.remove('overlayS');
});