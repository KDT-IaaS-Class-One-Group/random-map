export default class City {
  constructor(name, center, northEastLat, northEastLng, southWestLat, southWestLng) {
    this.name = name;
    // this.center = new naver.maps.LatLng{ center.lat, center.lng };
    this.center = new naver.maps.LatLng(center.lat, center.lng);
    this.northEastLat = northEastLat;
    this.northEastLng = northEastLng;
    this.southWestLat = southWestLat;
    this.southWestLng = southWestLng;
  }
}


