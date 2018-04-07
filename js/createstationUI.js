var place_invididual_station_ui = document.querySelector('#individual-station-data');

function CreateIndividualStationDiv(){
    var invidual_station_UI = document.createElement('div');
    invidual_station_UI.classList.add('individual-station');
    return invidual_station_UI;
}

function AddStationData(HTML_element,data_value,data_name,parent_element){
    var station_data_item = document.createElement(HTML_element);
    station_data_item.innerHTML = ('<strong> ' + data_name + '</strong> ' + data_value)
    parent_element.appendChild(station_data_item);
}

function CreateStationUI(station_name,docks_available,bikes_available,time_last_updated){
    var this_station = CreateIndividualStationDiv();
    AddStationData('h2',station_name,'',this_station); // add station name
    AddStationData('p',docks_available,'Docks available:',this_station); // add dock amounts
    AddStationData('p',bikes_available,'Bikes available:',this_station); // add bike amount
    AddStationData('p',time_last_updated,'Last Updated:',this_station); // add last time updated
    place_invididual_station_ui.appendChild(this_station);
}