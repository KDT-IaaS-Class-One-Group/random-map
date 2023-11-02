import { City } from "./cityClass";
import { createMap, moveToLocation } from "./map";

document.addEventListener('DOMContentLoaded', () => {
  // 도시 정보를 객체 배열로 정의

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
    new City('Chuncheon', { lat: 37.8859071, lng: 127.7312171 }, 37.940661, 127.735637, 37.781740, 127.481306),
    new City('Pohang', { lat: 36.0181004, lng: 129.3394663 },36.122430, 129.400489, 35.969604, 129.262939),
    new City('Changwon', { lat: 35.2277432, lng: 128.6810893 }, 35.270247, 128.674256, 35.210080, 128.532914),
    new City('Jeonju', { lat: 35.8242231, lng: 127.1488994 }, 35.854077, 127.175448, 35.749924, 127.070723),
    new City('Mokpo', { lat: 34.8118182, lng: 126.3922187 }, 34.829642, 126.392926, 34.775726, 126.318919),
    new City('Cheongju', { lat: 36.637408, lng: 127.491424 }, 36.755025, 127.180487, 36.581349, 127.331717),
    new City('Cheonan', { lat: 36.815129, lng: 127.1138939 }, 36.869354, 127.137299, 36.750046, 127.069055),
    new City('Jeju', { lat: 33.499621, lng: 126.531188 }, 33.517928, 126.525486, 33.201673, 126.194457),
    new City('South-Korea', { lat: 37.5666102, lng: 126.9783881 }, 37.2351752, 131.8619943, 33.1202790, 125.7502453)
    // 여기에 다른 도시 정보 추가 가능
  ]

  let currentCityIndex = 0; // 초기 도시 인덱스 설정
  const map = createMap(cities[currentCityIndex].center);

  // 랜덤한 위치로 이동하는 함수
  function moveToRandomLocation() {
    const city = cities[currentCityIndex];
    const newLat = city.southWestLat + Math.random() * (city.northEastLat - city.southWestLat);
    const newLng = city.southWestLng + Math.random() * (city.northEastLng - city.southWestLng);
    moveToLocation(map, newLat, newLng);
  }

  const randomLocationBtn = document.getElementById('randomLocationBtn');

  // 버튼 클릭 시 랜덤 위치로 이동 함수 호출
  randomLocationBtn.addEventListener('click', moveToRandomLocation);

  // 다음 도시로 이동하는 함수
  function moveToNextCity() {
    currentCityIndex = (currentCityIndex + 1) % cities.length;
    moveToLocation(map, cities[currentCityIndex].center.lat(), cities[currentCityIndex].center.lng());
  }

  const nextCityBtn = document.getElementById('nextCityBtn');

  // 버튼 클릭 시 다음 도시로 이동 함수 호출
  nextCityBtn.addEventListener('click', moveToNextCity);
});