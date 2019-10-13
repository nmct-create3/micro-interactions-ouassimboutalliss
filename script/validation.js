let email = {},
    password = {},
    signInButton;

    const isValidEmailAddress = function(emailAddress) {
        // Basis manier om e-mailadres te checken.
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
    };

    const isEmpty = function(fieldValue) {
        return !fieldValue || !fieldValue.length;
     };
     
     const isValidPassword = function(password) {
        // Basis manier om password te checken.
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(password);
    };
    
const getDOM = function(){
    email.errorMessage =  document.querySelector('.js-email-error-message');
    email.input= document.querySelector('.js-email-input');
    email.field= document.querySelector('.js-email-field');

    password.errorMessage =  document.querySelector('.js-password-error-message');
    password.input =  document.querySelector('.js-password-input');
    password.field =  document.querySelector('.js-password-field');

    signInButton = document.querySelector('.js-sign-in-button');

    

    /* nog aanpassen in html koppelen */
};

const addErrors = function(field){
    field.classList.add('has-error');

}

const removeErrors = function(field){
    field.classList.remove('has-error');

}

const doubleCheckEmail = function(){
    if(isValidEmailAddress(email.input.value)){
        removeErrors(email.field);
        email.input.removeEventListener('input', doubleCheckEmail);
    }
    else{
        if(isEmpty(email.input.value)){
            email.errorMessage.innerHTML = 'The fiels is required';

        }
        else{
            email.errorMessage.innerHTML = 'The field is not valid';
        }

    }

}

const doubleCheckPassword = function(){
    if(isValidPassword(password.input.value)){
        removeErrors(password.field);
        password.input.removeEventListener('input', doubleCheckPassword);
    }
    else{
        if(isEmpty(password.input.value)){
            password.errorMessage.innerHTML = 'The fiels is required';

        }
        else{
            password.errorMessage.innerHTML = 'The field is not valid';
        }

    }

}

const enableInteraction = function(){
    // 1. Blur listener aan email veld hangen
    email.input.addEventListener('blur', function(event){
        
        const typedInput = event.target.value;

        if(!isValidEmailAddress(typedInput)){
            addErrors(email.field);
            
            if(isEmpty(typedInput)){
                email.errorMessage.innerHTML = 'The fiels is required';

            }
            else{
                email.errorMessage.innerHTML = 'The field is not valid';
            }

            email.input.addEventListener('input',doubleCheckEmail);
        }

       

    });
    // 2. Blur listener aan password veld hangen

    password.input.addEventListener('blur', function(event){
        
        const typedInput = event.target.value;

        if(!isValidPassword(typedInput)){
            addErrors(password.field);
            
            if(isEmpty(typedInput)){
                password.errorMessage.innerHTML = 'The fiels is required';

            }
            else{
                password.errorMessage.innerHTML = 'The field is not valid';
            }

            password.input.addEventListener('input',doubleCheckPassword);
        }
    });


    // 3. Click-event aan button hangen

   
};

document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM Loaded');
    getDOM();

    enableInteraction();
    
    });