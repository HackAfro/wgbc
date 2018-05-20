function initMap() {
  const coordinates = {
    lat: 6.542666,
    lng: 3.325288,
  };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: coordinates,
  });
  const marker = new google.maps.Marker({
    position: coordinates,
    map: map,
  });
}
