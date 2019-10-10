
let passwordInput, passwordToggle;

const getDOMElements = function(){
    passwordInput = document.querySelector('.js-password-input');
    passwordToggle = document.querySelector('.js-password-toggle');

    console.log('Input', passwordInput);
    console.log('Toggle',passwordToggle);
};

const enableListeners = function(){

    passwordToggle.addEventListener('change',function(e){
        //do some stuff
        console.log(e);
        if (e.target.checked){
            passwordInput.type="text";
        }
        else{
            passwordInput.type ="password";
        }
        // 1. dubbelcheck wat de state is
        // 2. Verander de passwordInput van type

    })
}

document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM Loaded');
    getDOMElements();
    enableListeners();

});