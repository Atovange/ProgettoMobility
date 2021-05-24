let map;

var latitude = 38.115658;
var longitude = 13.361262;

var myPos;

const image = "https://cdn.discordapp.com/attachments/794137631650480128/846308571180040192/sonoQui2.png";
var marker;

var options = { // oggetto opzionale PositionOptions 
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

navigator.geolocation.getCurrentPosition(successLocate, null, options);

function successLocate(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    myPos = new google.maps.LatLng(latitude, longitude);
    map.panTo(myPos);

    if(marker) {
      marker.setPosition(myPos);
    } else {
      marker = new google.maps.Marker({
          position: myPos,
          title:"Tu Sei Qui!",
          icon: image,
      });

      marker.setMap(map);
    }
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: latitude, lng: longitude },
    zoom: 16,
    mapId: '179baafa71400cec',
    disableDefaultUI: true,
  });
}

function panToMe() {
  if(marker)
    map.panTo(marker.getPosition());
}

// TODO CHE SI SPOSTA
/*
var intervalId = window.setInterval(function(){
  // QUI
}, 5000);
*/