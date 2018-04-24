var place_invididual_station_ui = document.querySelector('#individual-station-data');
var fragment = document.createDocumentFragment();
var init_fragment = [];

function CreateIndividualStationDiv(){
    var invidual_station_UI = document.createElement('div');
    invidual_station_UI.classList.add('individual-station');
    return invidual_station_UI;
}

function AddStationData(HTML_element,data_value,data_name,parent_element,CSS_class){
    var station_data_item = document.createElement(HTML_element);
    station_data_item.innerHTML = ('<strong> ' + data_name + '</strong> ' + data_value)

    if (CSS_class){
        station_data_item.classList.add(CSS_class);
    }
    parent_element.appendChild(station_data_item);
}

function CalculateStationDistance(station_lat,station_lon,user_lat,user_lon){
    if (user_lat === undefined || user_lon === undefined){
        return 'geolocation not available';
    } else {
        var distance = geolib.getDistance(
            {latitude:station_lat , longitude:station_lon},
            {latitude:user_lat , longitude:user_lon}
        );
        var compass = geolib.getCompassDirection(
            {latitude:user_lat , longitude:user_lon},
            {latitude:station_lat , longitude:station_lon}
        );
        return [distance,(String(distance) + ' meters away ' + '(' + compass.rough + ')')];
    }
}

function CreateStationUI(station_name,docks_available,bikes_available,time_last_updated,latitude,longitude){
    
    var this_station = CreateIndividualStationDiv(); // create station div

    AddStationData('h2',station_name,'',this_station,'center-text'); // add station name

    // calculate station distance from user
    var station_distance = CalculateStationDistance(latitude,longitude,user_lat,user_lon);
    if (typeof(station_distance) != 'string'){
        this_station.dataset.distance = station_distance[0];
        AddStationData('p',String(station_distance[1]) + '','',this_station,'center-text');
    } else {
        AddStationData('p',station_distance + '','',this_station,'center-text');
    }

    // add bike or dock availability data, depending which value is relevant to user
    if (hide_bike_value){
        AddStationData('p',docks_available,'Docks available:',this_station); // add bike amount
    } else {
        AddStationData('p',bikes_available,'Bikes available:',this_station); // add dock amounts
    }

    AddStationData('p',moment(time_last_updated).fromNow(),'Last Updated:',this_station); // add last time updated
    
    init_fragment.push(this_station);
}
