
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
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "white"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
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
      url: 'http://www.iconsdb.com/icons/preview/yellow/spray-can-xxl.png',
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
