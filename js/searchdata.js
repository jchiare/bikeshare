
//var searchArea = 

// Get Data

function ParseResponseData(data){

}

function GetData(){
    axios.get('https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_information.json')
    .then(function(response){
        if (response.status == 200){
            var data = response.data.data['stations']
            console.log(data)
            console.log(typeof(data))
        }
    })
    .catch(function(error){
        console.log(error);
    });
}

