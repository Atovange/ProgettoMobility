let map;

var latitude = 0;
var longitude = 0;

var center;

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

    const image = "https://cdn.discordapp.com/attachments/413401624741019657/846068092886188032/IconQui.png";

    marker = new google.maps.Marker({
        position: myPos,
        title:"Tu Sei Qui!",
        icon: image,
    });

    marker.setMap(map);

}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: latitude, lng: longitude },
    zoom: 16,
    mapId: '179baafa71400cec',
    disableDefaultUI: true,
  });
}

// TODO CHE SI SPOSTA
/*
var intervalId = window.setInterval(function(){
  // QUI
}, 5000);
*/