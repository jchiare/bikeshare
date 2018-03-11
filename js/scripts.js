'use strict';

var animationTime = " 0.6s";

var useButton = document.querySelector('#use');
var dropButton = document.querySelector('#drop');
var landingText = document.querySelector('#landing');
var appName = document.querySelector('#name');
var orText = document.querySelector('#or');

function addAnimation(object,animateAttribute){
    return object.style.animation = animateAttribute + animationTime;
}

function hideObject(object){
    return object.style.display = "none";
}

function buttonAnimation(button,animateAttribute){
    addAnimation(button,animateAttribute);
    addAnimation(landingText,animateAttribute);
    addAnimation(orText,animateAttribute);

    setTimeout(function(){
        hideObject(button);
        hideObject(landingText);
        hideObject(orText);
  },600);
}

useButton.addEventListener('click',function(){
  
  buttonAnimation(this,"swing-left");
  buttonAnimation(dropButton,"dissappear");
  
});

dropButton.addEventListener('click',function(){
  
  buttonAnimation(this,"swing-left");
  buttonAnimation(useButton,"dissappear");
  
});