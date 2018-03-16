'use strict';

var useButton = document.querySelector('#use');
var dropButton = document.querySelector('#drop');
var landingText = document.querySelector('#landing');
var appName = document.querySelector('#name');
var orText = document.querySelector('#or');
var buttonSection = document.querySelector('#button-section');


function hideObject(object){
    return object.classList.add('hidden');
}

function AfterLandingPageAction(target){
    addSearchArea();
    ShowButton();
}

buttonSection.addEventListener('click',function(e){
  
    if (e.target.id === useButton.id || e.target.id === dropButton.id){
        hideObject(useButton);
        hideObject(dropButton);
        hideObject(landingText);
        hideObject(orText);
        AfterLandingPageAction(e.target.id);
        GetLocation();
    } 
    
})