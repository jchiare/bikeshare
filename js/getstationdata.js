var bikes_available_amount = new Map();
var docks_available_amount = new Map();
var station_last_report_timestamp = new Map();

function ParseStationData(data){
    data.forEach(function(station){
        bikes_available_amount.set(station.num_bikes_available,station.station_id);
        docks_available_amount.set(station.num_docks_available,station.station_id);
        station_last_report_timestamp.set(station.last_reported,station.station_id);
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

function RunTimeOut(time){
    setTimeout(function(){
        GetStationData();
    },time * 1000);
}
