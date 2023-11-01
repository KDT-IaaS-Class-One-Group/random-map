const citieArray = require('./static/js/cities.js');
const City = require('./static/js/cityClass.js');

document.addEventListener('DOMContentLoaded', () => {
  // 도시 정보를 객체 배열로 정의

  for (const cityData of citieArray) {
    const newCity = new City(cityData.name, cityData.center, cityData.northEast, cityData.southWest);

    let currentCityIndex = 0; // 초기 도시 인덱스 설정

    let map = new naver.maps.Map('map', {
      center: newCity[currentCityIndex].center,
      zoom: 15,
    });

    // 랜덤한 위치로 이동하는 함수
    function moveToRandomLocation() {
      const city = newCity[currentCityIndex];
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
      currentCityIndex = (currentCityIndex + 1) % newCity.length;
      map.setCenter(newCity[currentCityIndex].center);
    }

    const nextCityBtn = document.getElementById('nextCityBtn');

    // 버튼 클릭 시 다음 도시로 이동 함수 호출
    nextCityBtn.addEventListener('click', moveToNextCity);
  }
});
