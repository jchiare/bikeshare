'use strict';

var ANIMATIONTIME = " 0.32s";
var DISSAPPEARANIMATION = "dissappear";
var SWINGLEFTANIMATION = "swing-left";


var useButton = document.querySelector('#use');
var dropButton = document.querySelector('#drop');
var landingText = document.querySelector('#landing');
var appName = document.querySelector('#name');
var orText = document.querySelector('#or');
var buttonSection = document.querySelector('#button-section');


function hideObject(object){
    return object.target.classList.add('hidden');
}

function animater(object,animateAttribute){
    object.style.animation = animateAttribute + ANIMATIONTIME + ' ease-in';
    object.addEventListener("animationend",hideObject);
}

function dissappearAnimation(object){
    return animater(object, DISSAPPEARANIMATION);
}


buttonSection.addEventListener('click',function(e){

    // add animation to specific buttons, animation depends on which button is clicked
    if (e.target === useButton){
        animater(useButton,SWINGLEFTANIMATION);
        dissappearAnimation(dropButton);
    } else {
        animater(dropButton,SWINGLEFTANIMATION);
        dissappearAnimation(useButton);
    }
    dissappearAnimation(landingText);
    dissappearAnimation(orText);
})