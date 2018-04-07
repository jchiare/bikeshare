var user_input;

var search_station_area = document.querySelector('#input');
search_station_area.addEventListener('input',SearchStationArea);
search_station_area.addEventListener('keypress',SearchStationArea);

function SearchStationArea(event){
    // if user presses 'enter', search for the station
    if (event.type === 'keypress' && event.key === 'Enter'){
        station_names.forEach(function(id,name){
            if (name.toLowerCase().includes(user_input)){
                CreateStationUI(name,
                                docks_available_amount.get(id),
                                bikes_available_amount.get(id),
                                station_last_report_timestamp.get(id))
            }
        })
    }
    // otherwise, keep appending value to user_input
    else if (event.type === 'input'){
        user_input = this.value.toLowerCase();
    }
    
}