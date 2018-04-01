'use strict';

var use_button = document.querySelector('#use');
var drop_off_bike_button = document.querySelector('#drop');
var landing_page_text = document.querySelector('#landing');
var or_landing_page_text = document.querySelector('#or');
var button_landing_page_section = document.querySelector('#button-section');


function HideObject(object){
    return object.classList.add('hidden');
}

function AfterLandingPageAction(target){
    AddSearchArea();
    ShowButton();
}

button_landing_page_section.addEventListener('click',function(e){
  
    if (e.target.id === use_button.id || e.target.id === drop_off_bike_button.id){
        HideObject(use_button);
        HideObject(drop_off_bike_button);
        HideObject(landing_page_text);
        HideObject(or_landing_page_text);
        AfterLandingPageAction(e.target.id);
        GetLocation();
    } 
    
})

window.onload = function(){
    GetStationHeaders();
};