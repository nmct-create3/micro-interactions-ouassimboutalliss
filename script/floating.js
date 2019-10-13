const handleFloatingLabel = function(){
    const floatingInput = document.querySelector('.js-name-input');

    const floatingLabel = document.querySelector('.js-name-label');

    //1 check of iets ingevuld is bij blur-event
    floatingInput.addEventListener('blur',function(){

    
    if(floatingInput.value.length > 0){
        //2: voeg een class is-floating toe indien er een value is
        
        // 3: maak die class is-floating aan en zorg dat het blijft bovenaan staan$
        floatingLabel.classList.add('is-floating');
       }
    else{
        //4: indien de input weer leeg is, halen we die class er weer af
        floatingLabel.classList.remove('is-floating');
    }
});  

};
        





document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM Loaded');
    handleFloatingLabel();
  

});