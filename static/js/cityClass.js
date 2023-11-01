class City {
  constructor(name, center, northEast, southWest) {
    this.name = name;
    this.center = { lat: center.lat, lng: center.lng };
    this.northEast = { lat: northEast.lat, lng: northEast.lng };
    this.southWest = { lat: southWest.lat, lng: southWest.lng };
  }
}

module.exports = City;

