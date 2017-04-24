
$(init);

function init () {
  initMap();
}

function initMap() {
  var gaCampus = {lat: 51.515113, lng: -0.072051};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: gaCampus
  });
}
      styles: [{
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#e0efef"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "hue": "#1900ff"
          },
          {
            "color": "#c0e8e8"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "lightness": 100
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "lightness": 700
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#7dcdcd"
          }]}]
    //     });
    //   const marker = new google.maps.Marker({
    //       position: gaCampus,
    //       map: map
    //     });
    //
