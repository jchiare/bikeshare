var current_location_section = document.querySelector('#if-use-bike');
var current_location_button = document.querySelector('#location');

var user_lat;
var user_lon;

var geolocation_options = {
    enableHighAccuracy: true
};

function SuccessGeolocationCall(position){
    user_lat = position.coords.latitude;
    user_lon = position.coords.longitude;
    console.log('run it!');
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
