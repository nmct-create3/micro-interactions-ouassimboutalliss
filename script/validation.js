let email = {},
    password = {},
    signInButton;

const getDOMElements = function(){
    email.errorMessage =  document.querySelector('.js-email-field');
    email.input= document.querySelector('.js-email-error-message');
    email.field= document.querySelector('.js-email-input');

    password.errorMessage =  document.querySelector('.js-password-field');
    password.input =  document.querySelector('.js-password-error');
    password.field =  document.querySelector('.js-password-input');

    signInButton = document.addEventListener('.js-sign-in-button');

    

    /* nog aanpassen in html koppelen */
};

document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM Loaded');
    getDOMElements();
    
    });