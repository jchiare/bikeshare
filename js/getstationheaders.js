var station_names = new Map();
var station_latitude = new Map();
var station_longitude = new Map();

// grab Station name, unique ID, latitude, and longitude
function ParseHeadersResponseData(data){
    data.forEach(function(station){
        station_names.set(station.name,station.station_id);
        station_latitude.set(station.station_id,station.lat);
        station_longitude.set(station.station_id,station.lon);
    });
}

function GetStationHeaders(){
    axios.get('https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_information.json')
    .then(function(response){
        if (response.status == 200){
            var data = response.data.data['stations'];
            ParseHeadersResponseData(data);
        } else {
            console.log(response.status);
        }
    })
    .catch(function(error){
        console.log(error);
    });
}