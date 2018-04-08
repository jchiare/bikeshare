var current_location_section = document.querySelector('#if-use-bike');
var current_location_button = document.querySelector('#location');

var user_lat;
var user_lon;

var geolocation_options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function SuccessGeolocationCall(position){
    user_lat = position.coords.latitude;
    user_lon = position.coords.longitude;
}

function GeolocationError(error){
    console.warn(error);
}

function GetLocation(){
    navigator.geolocation.getCurrentPosition(SuccessGeolocationCall,GeolocationError,geolocation_options);
}

current_location_section.addEventListener('click',function(e){
    if (e.target.id === current_location_button.id ){
        GetLocation();
    }
})
