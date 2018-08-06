function initMap() {
  const mapContainer = document.querySelector('.contacts__map');

  if (mapContainer) {
    const izo = { lat: 50.4765582, lng: 30.503495816 };

    const mapOptions = {
      zoom: 15,
      center: izo
    };

    const map = new google.maps.Map(mapContainer, mapOptions);

    const marker = new google.maps.Marker({
      position: izo,
      map
    })
  }
}