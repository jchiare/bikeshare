var search_station_area = document.querySelector('#input');
search_station_area.addEventListener('input',SearchStationArea);

function compare(a,b){
    return a.dataset.distance - b.dataset.distance
}

function SearchStationArea(event){
    
    // clear individual station UIs for each event -- to display freshest data according to search field
    while (place_invididual_station_ui.hasChildNodes()){
        place_invididual_station_ui.removeChild(place_invididual_station_ui.lastChild);
    }
    
    if (this.value !== ""){
         // get value from search field, and search stations via the name 
         var user_input;
         if (this === search_station_area){
            user_input = this.value.toLowerCase();
         } else {
             user_input = " ";
         }
         station_names.forEach(function(id,name){
             if (name.toLowerCase().includes(user_input)){
                 CreateStationUI(name,
                                 docks_available_amount.get(id),
                                 bikes_available_amount.get(id),
                                 station_last_report_timestamp.get(id),
                                 station_latitude.get(id),
                                 station_longitude.get(id));
             }
         })
         // sort array of station divs by closest distance
         init_fragment.sort(compare);
         while (init_fragment.length > 0){
             fragment.appendChild(init_fragment.shift());
         }
         // add all divs at once
         place_invididual_station_ui.appendChild(fragment);
    }
   
}