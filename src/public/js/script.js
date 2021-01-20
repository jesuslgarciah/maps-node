const map = L.map('map');
const tileURL = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';
let marker = {}
const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
})


// enable location to browser
map.locate({ enableHighAccuracy: true});

// event location found
map.on('locationfound', locationOn)

//event click on map
map.on('click', onMapClick)
// set tile to map
L.tileLayer(tileURL).addTo(map);

function locationOn(e){
  const coords = [e.latlng.lat, e.latlng.lng];
  map.setView(coords, 14)
  L.marker(coords).addTo(map)
    .bindPopup('¡You are here!')
    .openPopup();
}

function onMapClick(e){
  const coords = [e.latlng.lat, e.latlng.lng];

  if(marker != undefined) {
    map.removeLayer(marker);
  }
  marker = L.marker(coords).addTo(map)
            .bindPopup('¡You select this place!')
            .openPopup();
}