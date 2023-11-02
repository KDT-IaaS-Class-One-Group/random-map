import { createMap, moveToLocation } from './map-s.js';
import { cities } from './citiesArray-s.js';

document.addEventListener('DOMContentLoaded', () => {
  // 도시 정보를 객체 배열로 정의

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
    const cityName = cities[currentCityIndex].name;
    const text = document.getElementById('text');
    text.innerHTML = `"어서오세요! 이곳은 ${cityName}입니다."`
  }

  const nextCityBtn = document.getElementById('nextCityBtn');

  // 버튼 클릭 시 다음 도시로 이동 함수 호출
  nextCityBtn.addEventListener('click', moveToNextCity);

  // 다음 도시를 랜덤으로 이동하는 함수
  function moveToRandomNextCity() {
    const randomCityIndex = Math.floor(Math.random() * cities.length);
    moveToLocation(map, cities[randomCityIndex].center.lat(), cities[randomCityIndex].center.lng());
    const cityName = cities[randomCityIndex].name;
    const text = document.getElementById('text');
    text.innerHTML = `"어서오세요! 이곳은 ${cityName}입니다."`
  }

  const randomCityBtn = document.getElementById('randomCityBtn');

  // 버튼 클릭 시 다음 도시를 랜덤으로 이동 함수 호출
  randomCityBtn.addEventListener('click', moveToRandomNextCity);
});
