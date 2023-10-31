document.addEventListener('DOMContentLoaded', () => {
  // 도시 정보를 객체 배열로 정의
  
  // 도시 정보 생성자 함수
  class City {
    constructor(name, center, northEastLat, northEastLng, southWestLat, southWestLng) {
      this.name = name;
      this.center = new naver.maps.LatLng(center.lat, center.lng);
      this.northEastLat = northEastLat;
      this.northEastLng = northEastLng;
      this.southWestLat = southWestLat;
      this.southWestLng = southWestLng;
    }
  }

  // 도시 정보 배열 생성
  const cities = [
    new City('Seoul', { lat: 37.5666102, lng: 126.9783881 }, 37.701857, 127.148242, 37.428725, 126.767625),
    new City('Daejeon', { lat: 36.350214, lng: 127.384548 }, 36.414012, 127.593538, 36.264035, 127.312206),
    new City('Busan', { lat: 35.1797765, lng: 129.0750915 }, 35.267355, 129.517874, 35.056588, 128.961066),
    new City('Daegoo', { lat: 35.8713804, lng: 128.6017431 }, 35.925042, 128.713877, 35.758222, 128.413634),
    new City('Incheon', { lat: 37.4562562, lng: 126.7052062 }, 37.645806, 126.678674, 37.301116, 126.604511),
    new City('Gwangjoo', { lat: 35.1595454, lng: 126.8526017 }, 35.239666, 126.900758, 35.103365, 126.809647),
    new City('Ulsan', { lat: 35.5383773, lng: 129.3113607 }, 35.597795, 129.365053, 35.464000, 129.299386),
    new City('Sejong', { lat: 36.481724, lng: 127.287122 }, 36.640130, 127.442458, 36.432992, 127.312920),
    // 여기에 다른 도시 정보 추가 가능
  ]

  let currentCityIndex = 0; // 초기 도시 인덱스 설정

  let map = new naver.maps.Map('map', {
    center: cities[currentCityIndex].center,
    zoom: 15,
  });

  // 랜덤한 위치로 이동하는 함수
  function moveToRandomLocation() {
    const city = cities[currentCityIndex];
    const newLat = city.southWestLat + Math.random() * (city.northEastLat - city.southWestLat);
    const newLng = city.southWestLng + Math.random() * (city.northEastLng - city.southWestLng);
    const newLocation = new naver.maps.LatLng(newLat, newLng);

    map.panTo(newLocation);
  }

  const randomLocationBtn = document.getElementById('randomLocationBtn');

  // 버튼 클릭 시 랜덤 위치로 이동 함수 호출
  randomLocationBtn.addEventListener('click', moveToRandomLocation);

  // 다음 도시로 이동하는 함수
  function moveToNextCity() {
    currentCityIndex = (currentCityIndex + 1) % cities.length;
    map.setCenter(cities[currentCityIndex].center);
  }

  const nextCityBtn = document.getElementById('nextCityBtn');

  // 버튼 클릭 시 다음 도시로 이동 함수 호출
  nextCityBtn.addEventListener('click', moveToNextCity);
});