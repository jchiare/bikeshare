var current_location_section = document.querySelector('#if-use-bike');
var current_location_button = document.querySelector('#location');

var user_lat;
var user_lon;

function SuccessGeolocationCall(position){
    user_lat = position.coords.latitude;
    user_lon = position.coords.longitude;
}

function GeolocationError(error){
    console.warn(error);
}

function GetLocation(){
    navigator.geolocation.getCurrentPosition(SuccessGeolocationCall,GeolocationError);
}

current_location_section.addEventListener('click',function(e){
    if (e.target.id === current_location_button.id ){
        GetLocation();
    }
})
