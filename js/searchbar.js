var search_station_area = document.querySelector('#input');
search_station_area.addEventListener('input',SearchStationArea);

function SearchStationArea(event){
    
    // clear individual station UIs for each event -- to get freshest data
    while (place_invididual_station_ui.hasChildNodes()){
        place_invididual_station_ui.removeChild(place_invididual_station_ui.lastChild);
    }

    // get value from search field, and search stations via the name 
    var user_input = this.value.toLowerCase();
    station_names.forEach(function(id,name){
        if (name.toLowerCase().includes(user_input)){
            CreateStationUI(name,
                            docks_available_amount.get(id),
                            bikes_available_amount.get(id),
                            station_last_report_timestamp.get(id));
        }
    })
}