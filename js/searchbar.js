
var search_station_area = document.querySelector('#input');
search_station_area.addEventListener('keypress',SearchStationArea);

function SearchStationArea(event){
    var user_input = this.value.toLowerCase();

    if (event.key === 'Enter') {
        station_names.forEach(function(id,name){
            if (name.toLowerCase().includes(user_input)){
                console.log(name + ' ' + id);
            }
        })
    }
}
/*
addStationUI(station_name, docks_available_num, bikes_available_num, time_last_updated) {
    const div = document.createElement('div');
    div.classList.add('bikeshare');

    const heading = document.createElement('h2');
    heading.textContent = `${station_name}`;

    const docks = document.createElement('p');
    docks.innerHTML = `<strong>Docks available:</strong> ${docks_available_num}`;

    const bikes = document.createElement('p');
    bikes.innerHTML = `<strong>Bikes available:</strong> ${bikes_available_num}`;

    const time = document.createElement('p');
    time.innerHTML = `<strong>Last Updated:</strong> ${time_last_updated} ago`;

    // append errthang
    div.appendChild(heading);
    div.appendChild(docks);
    div.appendChild(bikes);
    div.appendChild(time);
    find_container.appendChild(div);
  },*/