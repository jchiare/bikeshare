
//var searchArea = 

var station_names = new Map();
var station_latitude = new Map();
var station_longitude = new Map();

function ParseResponseData(data){
    data.forEach(function(station){
        station_names.set(station.station_id,station.name);
        station_latitude.set(station.station_id,station.lat);
        station_longitude.set(station.station_id,station.lon);
    });
    console.log(station_names);
    console.log(station_latitude);
    console.log(station_longitude);
}

function GetStationHeaders(){
    axios.get('https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_information.json')
    .then(function(response){
        if (response.status == 200){
            var data = response.data.data['stations'];
            ParseResponseData(data);
        }
    })
    .catch(function(error){
        console.log(error);
    });
}

