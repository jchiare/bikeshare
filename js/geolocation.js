
var findButton = document.querySelector('#if-use-bike');

function GetLocation(){
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude + ' ' + position.coords.longitude);
          });
    
      } else {
        console.log("shit");
      }
}

findButton.addEventListener('click',function(){
    GetLocation();
})
