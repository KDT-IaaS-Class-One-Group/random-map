export function createMap(center) {
  return new naver.maps.Map('map', {
    center: center,
    zoom: 15,
  });
}

export function moveToLocation(map, lat, lng) {
  const newLocation = new naver.maps.LatLng(lat, lng);
  map.panTo(newLocation);
}