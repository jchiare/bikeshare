var bikes_available_amount = new Map();
var docks_available_amount = new Map();
var station_last_report_timestamp = new Map();

// grab bikes available, docks available, and last time reported
function ParseStationData(data){
    data.forEach(function(station){
        bikes_available_amount.set(station.station_id,station.num_bikes_available);
        docks_available_amount.set(station.station_id,station.num_docks_available);
        station_last_report_timestamp.set(station.station_id,station.last_reported);
    })
}

function GetStationData(){
    axios.get('https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_status.json')
    .then(function(response){
        if (response.status == 200){
            var data = response.data.data.stations;
            ParseStationData(data);
            RunTimeOut(response.data.ttl); // response.data.ttl == next time until new data will come
        } else {
            console.log("API call to get station data didn't work mate");
        }
    })
    .catch(function(error){
        console.log(error);
    });
}

// get station data every time the next update is available, according to most recent `ttl` JSON value
function RunTimeOut(time){
    setTimeout(function(){
        GetStationData();
    },time * 1000);
}
