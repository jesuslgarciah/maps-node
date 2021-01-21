let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 4.609, lng: -74.081},
    zoom: 10,
  });
}