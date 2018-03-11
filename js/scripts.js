'use strict';

var animationTime = " 0.6s";

var useButton = document.querySelector('#use');
var dropButton = document.querySelector('#drop');
var landingText = document.querySelector('#landing');
var appName = document.querySelector('#name');
var orText = document.querySelector('#or');


function hideObject(object){
    return object.target.style.display = "none";
}

function animater(object,attribute){
    return addAnimation(object,attribute);
}

function addAnimation(object,animateAttribute){
    object.style.animation = animateAttribute + animationTime;
    object.addEventListener("animationend",hideObject);
}

useButton.addEventListener('click',function(){
    animater(this,"swing-left");
    animater(dropButton,"dissappear");
    animater(landingText,"dissappear");
    animater(orText,"dissappear");
});

dropButton.addEventListener('click',function(){
    animater(this,"swing-left");
    animater(useButton,"dissappear");
    animater(landingText,"dissappear");
    animater(orText,"dissappear");
});