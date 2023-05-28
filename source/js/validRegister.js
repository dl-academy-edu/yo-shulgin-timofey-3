// // работа с формой входа
// (function() {
//     const form = document.forms.register;

//     if ( !form ) return;

//     form.addEventListener('submit', (e) => {
//         e.preventDefault(); 

//         // / получаем элементы
//         const userEmail = form.elements.email;
//         const userPassword = form.elements.password;
        
//         const data = {
//             email: userEmail.value,
//             password: userPassword.value,
//         }

//         console.log(data);
//     })
// })();

// работа с формой регистрации

(function() {
    // полчумаем форму регистриации
    const form = document.forms.register;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const userEmail = form.elements.email;
        const userName = form.elements.name;
        const userSurname = form.elements.surname;
        const userPassword = form.elements.password;
        const userRepeatPassword = form.elements.repeatPassword;
        const userLocation = form.elements.location;
        const userAge = form.elements.age;
        const accepnt = form.elements.consent;

        let errors = {};

        if ( !accepnt ) errors.accepnt = 'Согласитесь обязательно!!!!';
        if ( !isEmailCorrect(userEmail.value) ) errors.email = 'некорректный email';
        if ( userPassword.value.length < 6 ) errors.password = 'Слишком короткий пароль';
        if ( userRepeatPassword.value.length != userPassword ) errors.password = 'Слишком короткий пароль';
        if ( userName.value.length < 2 ) errors.name = 'слишком короткое имя';

        if (Object.keys(errors).length) {
            Object.keys(errors).forEach(key => {
                const messageError = errors[key];
                const input = form.elements[key];
                setError(input, messageError)
            })
        }


    })
    activeSignUp();
    function activeSignUp(accepnt) {
        if ( accepnt.checked ) setAttribute.remove('disabled', 'disabled');
    }
})();

function isEmailCorrect (email) {
    return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
}

function setError(input, messageError) {
    if ( input[0] ) {
        setErrorChecked(input, messageError);
    } else {
        setErrorText(input, messageError);
    }
}

function setErrorChecked(input, messageError) {

}

function activeSignUp(accepnt) {
    const btnUp = document.querySelector('.register__form--btn');
}

// function setErrorText(input, messageError) {
//     const error = 
// }

// function errorCreator(errorMessage) {
//     let messageErrorContainer = document.createElement('div');
//     messageErrorContainer.classList.add
// }