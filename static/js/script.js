import { citiesArray } from './citiesArray.js';
import City from './cityClass.js';

document.addEventListener('DOMContentLoaded', () => {
  // 도시 정보를 객체 배열로 정의
  let currentCityIndex = 0;
  let map;

  citiesArray.forEach((cityData)=> {
    const newCity = new City(cityData.name, cityData.center, cityData.northEast, cityData.southWest);

    if (!map) {
      map = new naver.maps.Map('map', {
        center: newCity.center,
        zoom: 15,
      });
    }
    // 랜덤한 위치로 이동하는 함수
    function moveToRandomLocation() {
      const newLat = cityData.southWest.lat + Math.random() * (cityData.northEast.lat - cityData.southWest.lat);
      const newLng = cityData.southWest.lng + Math.random() * (cityData.northEast.lng - cityData.southWest.lng);
      const newLocation = new naver.maps.LatLng(newLat, newLng);
  
      map.panTo(newLocation);
    }
  
    const randomLocationBtn = document.getElementById('randomLocationBtn');
  
    // 버튼 클릭 시 랜덤 위치로 이동 함수 호출
    randomLocationBtn.addEventListener('click', moveToRandomLocation);
  
    // 다음 도시로 이동하는 함수
    function moveToNextCity() {
      currentCityIndex = (currentCityIndex + 1) % citiesArray.length;
      const nextCityData = citiesArray[currentCityIndex];
      const nextCity = new City(nextCityData.name, nextCityData.center, nextCityData.northEast, nextCityData.southWest);
      map.setCenter(nextCity.center);
    }
  
    const nextCityBtn = document.getElementById('nextCityBtn');
  
    // 버튼 클릭 시 다음 도시로 이동 함수 호출
    nextCityBtn.addEventListener('click', moveToNextCity);
  })

});
