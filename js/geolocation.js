var current_location_section = document.querySelector('#if-use-bike');
var current_location_button = document.querySelector('#location');

var user_lat;
var user_lon;


function GetLocation(){
    navigator.geolocation.getCurrentPosition(function(position) {
        user_lat = position.coords.latitude;
        user_lon = position.coords.longitude;
        console.log('went');
    });
}

current_location_section.addEventListener('click',function(e){
    if (e.target.id === current_location_button.id ){
        GetLocation();
    }
})
