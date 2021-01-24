let directionsService;
let directionsRenderer;
let originPlaceId = "";
let destinationPlaceId = "";

function initMap() {
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();

  const coords = {
    lat: 4.673,
    lng:  -74.14
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: coords,
    zoom: 10,
  });

  directionsRenderer.setMap(map);

  const originInput = document.getElementById("origin-input");
  const originAutocomplete = new google.maps.places.Autocomplete(originInput);

  const destinationInput = document.getElementById("destination-input");
  const destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput);

  placeChange(map, originAutocomplete, "ORIG");
  placeChange(map, destinationAutocomplete, "DEST")
}

function placeChange(map, autocomplete, mode){
  autocomplete.bindTo("bounds", map);
  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    if (!place.place_id) {
      window.alert("Please select an option from the dropdown list.");
      return;
    }

    if (mode === "ORIG") {
      originPlaceId = place.place_id;
    } else {
      destinationPlaceId = place.place_id;
    }

    drawRoute(originPlaceId, destinationPlaceId);
  })
}

function drawRoute(){
  if (!originPlaceId || !destinationPlaceId) return;

  directionsService.route(
    {
      origin: { placeId: originPlaceId },
      destination: { placeId: destinationPlaceId },
      travelMode: "DRIVING",
    },
    (response, status) => {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  )
}