export default class City {
  constructor(name, center, northEast, southWest) {
    this.name = name;
    // this.center = new naver.maps.LatLng{ center.lat, center.lng };
    this.center = new naver.maps.LatLng(center.lat, center.lng);
    this.northEast = { lat: northEast.lat, lng: northEast.lng };
    this.southWest = { lat: southWest.lat, lng: southWest.lng };
  }
}


