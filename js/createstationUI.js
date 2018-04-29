var place_invididual_station_ui = document.querySelector('#individual-station-data');

var fragment = document.createDocumentFragment();
var init_fragment = [];


function BuildStationDiv(){
    var invidual_station_UI = document.createElement('div');
    invidual_station_UI.classList.add('individual-station');
    return invidual_station_UI;
}

function AddStationData(HTML_element,data_value,data_name,parent_element){
    var station_data_item = document.createElement(HTML_element);
    station_data_item.innerHTML = ('<strong> ' + data_name + '</strong> ' + data_value)
    parent_element.appendChild(station_data_item);
}

function CalculateStationCompass(station_lat,station_lon,user_lat,user_lon){
    var compass = geolib.getCompassDirection(
        {latitude:user_lat , longitude:user_lon},
        {latitude:station_lat , longitude:station_lon}
    );
    return compass.rough;
}

function CalculateStationDistance(station_lat,station_lon,user_lat,user_lon){
    var distance = geolib.getDistance(
        {latitude:station_lat , longitude:station_lon},
        {latitude:user_lat , longitude:user_lon}
    );
    return distance;
}

function CreateStationUI(station_name,docks_available,bikes_available,time_last_updated,latitude,longitude){
    
    var this_station = BuildStationDiv(); // create station div

    AddStationData('h2',station_name,'',this_station); // add station name

    // calculate station distance from user
    if (geolocation_success){
        var station_distance = CalculateStationDistance(latitude,longitude,user_lat,user_lon);
        var station_compass = CalculateStationCompass(latitude,longitude,user_lat,user_lon);
        this_station.dataset.distance = station_distance;
        AddStationData('p',(station_distance + ' meters away ' + '(' + station_compass + ')'),'',this_station);
    } else {
        AddStationData('p','Geolocation not currently available.','',this_station);
    }

    // add bike or dock availability data, depending which value is relevant to user
    if (hide_bike_value){
        AddStationData('p',docks_available,'Docks Available: ',this_station); // add bike amount
    } else {
        AddStationData('p',bikes_available,'Bikes Available: ',this_station); // add dock amounts
    }

    AddStationData('p',moment(time_last_updated).fromNow(),'Last Updated:',this_station); // add last time updated
    
    init_fragment.push(this_station);
}
