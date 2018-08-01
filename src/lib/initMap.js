function initMap() {
  var breakpoint = 1024;
  var coordX = 34.1012608;
  var coordY = -118.3480153;

  if (breakpoint > window.outerWidth) {
    coordX = 34.1014207;
    coordY = -118.3446679;
  }

  var mapOptions = {

    center: new google.maps.LatLng(coordX, coordY),
    zoom: 17,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    fullscreenControl: false,
    disableDoubleClickZoom: false,
    mapTypeControl: false,
    scaleControl: false,
    scrollwheel: false,
    panControl: false,
    streetViewControl: false,
    draggable : true,
    overviewMapControl: false,
    overviewMapControlOptions: {
      opened: false,
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(34.101865, -118.344379),
    map: map,
    icon: 'https://iconsoft.io/img/ico-map.svg'
  });
}