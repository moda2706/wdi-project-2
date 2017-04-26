
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
    center: gaCampus,
    styles: [
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#dfdfdf"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 45
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "lightness": "0"
          },
          {
            "hue": "#00a8ff"
          },
          {
            "saturation": "25"
          },
          {
            "gamma": "0.5"
          },
          {
            "weight": "1"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#2babe2"
          },
          {
            "visibility": "on"
          }
        ]
      }
    ]
  });
  getAPIData(map);
}

// var icon = {
//   url: http:'//www.mrbrainwash.com/store/storeproducts/products/mbwspraycan/parts/cans/images/mbwspraycan-red.png',
//   scaledSize: new google.maps.Size(40, 65),
//   origin: new google.maps.Point(0, 0),
//   anchor: new google.maps.Point(0, 0),
// };

function addMarkers(map, latLng, artist) {
  const marker = new google.maps.Marker({
    position: latLng,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: {
      url: 'https://cdn0.iconfinder.com/data/icons/hardware-and-painting-tools/512/spray_can-128.png',
      scaledSize: new google.maps.Size(40, 40)
    }
  });
  addInfoWindowForArtist( artist, marker, map);
}

function addInfoWindowForArtist( artist, marker, map){
  console.log(artist);
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
