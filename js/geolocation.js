var current_location_section = document.querySelector('#if-use-bike');
var current_location_button = document.querySelector('#location');

var geolocation_success = false;

var user_lat;
var user_lon;

var geolocation_options = {
    enableHighAccuracy: true
};

function SuccessGeolocationCall(position){
    user_lat = position.coords.latitude;
    user_lon = position.coords.longitude;
    geolocation_icon.style.color = '#15ff89';
    console.log(geolocation_icon);
    geolocation_icon.setAttribute("title","Geolocation Activated!");
    geolocation_success = true;
    debugger;
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
        search_station_area.value = " ";
        SearchStationArea(search_station_area);
    }
})
