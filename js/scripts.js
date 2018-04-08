var hide_bike_value = Boolean;

// get buttons
var use_button = document.querySelector('#use');
var drop_off_bike_button = document.querySelector('#drop');

// get text
var landing_page_text = document.querySelector('#landing');
var or_landing_page_text = document.querySelector('#or');
var button_landing_page_section = document.querySelector('#button-section');
var app_name = document.querySelector('#header');

function AfterLandingPageAction(){
    HideObject(use_button);
    HideObject(drop_off_bike_button);
    HideObject(landing_page_text);
    HideObject(or_landing_page_text);
    HideObject(app_name);

    ShowObject(search_input_area);
    ShowObject(current_location_section);

    // ask to get user's location after they click the first button
    GetLocation();
    console.log('should have called getlocation by meow');
}

// Click a button to get the party started
button_landing_page_section.addEventListener('click',function(e){
    if (e.target.id === use_button.id){
        AfterLandingPageAction();
        hide_bike_value = false;
    } 
    else if (e.target.id === drop_off_bike_button.id){
        AfterLandingPageAction();
        hide_bike_value = true;
    }
})

// might as well make the API calls early 
window.onload = function(){
    GetStationHeaders();
    GetStationData();
};