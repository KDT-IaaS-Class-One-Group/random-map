document.addEventListener('DOMContentLoaded', () => {
  let map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.5666102, 126.9783881),
    zoom: 10,
  });

  let cities = [
    { name: "서울", lat: 37.5666102, lng: 126.9783881 },
    { name: "부산", lat: 35.1797765, lng: 129.0750915 },
    { name: "대구", lat: 35.8713804, lng: 128.6017431 },
    { name: "인천", lat: 37.4562562, lng: 126.7052062 },
    { name: "대전", lat: 36.350411, lng: 127.384547 },
    { name: "광주", lat: 35.1595454, lng: 126.8526017 },
    { name: "울산", lat: 35.5383773, lng: 129.3113607 },
    { name: "세종", lat: 36.481724, lng: 127.287122 },
    { name: "경기도 수원", lat: 37.2635734, lng: 127.0286007 },
    { name: "강원도 춘천", lat: 37.8859071, lng: 127.7312171 },
    { name: "경북 포항", lat: 36.0181004, lng: 129.3394663 },
    { name: "경남 창원", lat: 35.2277432, lng: 128.6810893 },
    { name: "전북 전주", lat: 35.8242231, lng: 127.1488994 },
    { name: "전남 목포", lat: 34.8118182, lng: 126.3922187 },
    { name: "충북 청주", lat: 36.637408, lng: 127.491424 },
    { name: "충남 천안", lat: 36.815129, lng: 127.1138939 },
    { name: "제주도 제주시", lat: 33.499621, lng: 126.531188 },
  ]

  //* 랜덤한 위치로 이동하는 함수
  function getRandomCity() {
    let randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex]
  }

  function moveToRandomCity()  {
    let randomCity = getRandomCity();
    let newLocation = new naver.maps.LatLng(randomCity.lat, randomCity.lng);
    map.panTo(newLocation);
    map.setZoom(11);
  }

  const randomCityBtn = document.getElementById('randomCityButton');

  //* 버튼 클릭 시 랜덤 위치로 이동 함수 호출

  randomCityBtn.addEventListener('click', moveToRandomCity);
});
