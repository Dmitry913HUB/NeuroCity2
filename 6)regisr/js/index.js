"use strict"
let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input'),
    inputEmail = document.querySelector('.js-input-email'),
    inputPhone = document.querySelector('.js-input-phone');
    inputPassword = document.querySelector('.js-input-password');
    inputPasswordR = document.querySelector('.js-input-passwordR');
    inputName = document.querySelector('.js-input-name');


function validateEmail(email) {
    let re = /^(.+)\@(.+)\.(.+)$/;
    return re.test(String(email).toLowerCase());
}

function validateCountry(country) {
    let re = new RegExp('.co$');
    return re.test(String(country).toLowerCase());
}

function validatePhone(phone) {
    let re = /^(\+?)\d{10,15}$/;
    return re.test(String(phone));
}

function validatePassword(password) {
    let re = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}/g;
    return re.test(String(password));
}

function validateName(name) {
    let re = /^[a-zA-Zа-яА-ЯёЁ]{3,30}$/;
    return re.test(String(name));
}

form.onsubmit = function () {
    let emailVal = inputEmail.value,
        phoneVal = inputPhone.value,
        nameVal = inputName.value,
        passwordVal = inputPassword.value,
        passwordRVal = inputPasswordR.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');

        } else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('inputs not filled');
        return false;
    }

    if(!validateEmail(emailVal)) {
        console.log('email not valid');
        inputEmail.classList.add('error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }

    if (validateCountry(emailVal)) {
        console.log('email from Columbia');
        inputEmail.classList.add('error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }

    if (!validatePhone(phoneVal)) {
        console.log('phone not valid');
        inputPhone.classList.add('error');
        return false;
    } else {
        inputPhone.classList.remove('error');
    }

    if (!validateName(nameVal)) {
        console.log('name not valid');
        inputName.classList.add('error');
        return false;
    } else {
        inputName.classList.remove('error');
    }

    if (!validatePassword(passwordVal)) {
        console.log('paswword not valid');
        inputPassword.classList.add('error');
        return false;
    } else {
        if (!(passwordRVal == passwordVal)) {
            console.log('Passwords do not match');
            inputPasswordR.classList.add('error');
            return false;
        } else {
            inputPasswordR.classList.remove('error');
        }
    }

    if (!validatePassword(passwordRVal)) {
        console.log('paswwordR not valid');
        inputPasswordR.classList.add('error');
        return false;
    } else {
        inputPasswordR.classList.remove('error');
    }
}