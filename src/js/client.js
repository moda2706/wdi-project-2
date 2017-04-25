
$(init);
var infowindow;

function init () {
  initMap();

}

function getAPIData(map) {
  $.get(`${window.location.origin}/artists/api`)
  .done(data => {
    console.log(data);
    data.artists.forEach(artist => {
      console.log(artist);
      const latLng = new google.maps.LatLng(artist.lat, artist.lng);
      addMarkers(map, latLng, artist);
      console.log(latLng);
    });
  });
}


function initMap() {
  var gaCampus = {lat: 51.515113, lng: -0.072051};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: gaCampus
  });
  getAPIData(map);
}

function addMarkers(map, latLng, artist) {
  const marker = new google.maps.Marker({
    position: latLng,
    map: map,
    animation: google.maps.Animation.DROP
  });
  addInfoWindowForArtist( artist, marker, map);
}

function addInfoWindowForArtist( artist, marker, map){
  google.maps.event.addListener(marker, 'click', function() {
    if (typeof infowindow !== 'undefined') {
      infowindow.close();
    }
    var contentString = `
    <div class="infowindow">
    <img class="artistImage" src="${ artist.image}">
    <h3>${artist.title }</h3>
    <p>${artist.description }</p>
    <p><a href="/artists/${artist._id}">Continue</a></p>
    </div>
    `;
    infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    infowindow.open(map, marker);
    map.setCenter(marker.getPosition());
  });
}



// styles: [{
//   "featureType": "landscape.natural",
//   "elementType": "geometry.fill",
//   "stylers": [
//     {
//       "visibility": "on"
//     },
//     {
//       "color": "#e0efef"
//     }
//   ]
// },
// {
//   "featureType": "poi",
//   "elementType": "geometry.fill",
//   "stylers": [
//     {
//       "visibility": "on"
//     },
//     {
//       "hue": "#1900ff"
//     },
//     {
//       "color": "#c0e8e8"
//     }
//   ]
// },
// {
//   "featureType": "road",
//   "elementType": "geometry",
//   "stylers": [
//     {
//       "lightness": 100
//     },
//     {
//       "visibility": "simplified"
//     }
//   ]
// },
// {
//   "featureType": "road",
//   "elementType": "labels",
//   "stylers": [
//     {
//       "visibility": "off"
//     }
//   ]
// },
// {
//   "featureType": "transit.line",
//   "elementType": "geometry",
//   "stylers": [
//     {
//       "visibility": "on"
//     },
//     {
//       "lightness": 700
//     }
//   ]
// },
// {
//   "featureType": "water",
//   "elementType": "all",
//   "stylers": [
//     {
//       "color": "#7dcdcd"
//     }]}]
//
