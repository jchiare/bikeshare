
function GetStationData(){
    axios.get('https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_status.json')
    .then(function(response){
        if (response.status == 200){
            var data = response.data.data.stations;
            console.log(response);
            RunTimeOut(response.data.ttl); // response.data.ttl == next time until new data will come
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
