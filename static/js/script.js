document.addEventListener('DOMContentLoaded', () => {
  // 도시 정보를 객체 배열로 정의
  const cities = [
    {
      name: 'Seoul',
      center: new naver.maps.LatLng(37.4562562, 126.7052062),
      northEastLat: 37.645806,
      northEastLng: 126.678674,
      southWestLat: 37.301116,
      southWestLng: 126.604511
    },
    {
      name: 'Daejeon',
      center: new naver.maps.LatLng(36.350214, 127.384548),
      northEastLat: 36.414012,
      northEastLng: 127.593538,
      southWestLat: 36.264035,
      southWestLng: 127.312206
    },
    {
      name: 'Busan',
      center: new naver.maps.LatLng(35.1797765, 129.0750915),
      northEastLat: 35.267355,
      northEastLng: 129.517874,
      southWestLat: 35.056588,
      southWestLng: 128.961066
    },
    {
      name: 'gyeonggi-do-suwon',
      center: new naver.maps.LatLng(35.1797765, 129.0750915),
      northEastLat: 37.347716,
      northEastLng: 126.995243,
      southWestLat: 37.226222,
      southWestLng: 126.918138
    },
    {
      name: 'Gangwon-do-Chuncheon',
      center: new naver.maps.LatLng(35.1797765, 129.0750915),
      northEastLat: 37.940661,
      northEastLng: 127.735637,
      southWestLat: 37.781740,
      southWestLng: 127.481306
    },{
      name: 'Gyeongsangbuk-do-Pohang',
      center: new naver.maps.LatLng(35.1797765, 129.0750915),
      northEastLat: 36.122430,
      northEastLng: 129.400489,
      southWestLat: 35.969604,
      southWestLng: 129.262939
    },{
      name: 'Gyeongnam-do-Changwon',
      center: new naver.maps.LatLng(35.1797765, 129.0750915),
      northEastLat: 35.270247,
      northEastLng: 128.674256,
      southWestLat: 35.210080,
      southWestLng: 128.532914
    },{
      name: 'jeonbuk-jeonnam',
      center: new naver.maps.LatLng(35.1797765, 129.0750915),
      northEastLat: 35.854077,
      northEastLng: 127.175448,
      southWestLat: 35.749924,
      southWestLng: 127.070723
    },{
      name: 'Jeollanam-do-Mokpo',
      center: new naver.maps.LatLng(35.1797765, 129.0750915),
      northEastLat: 34.829642,
      northEastLng: 126.392926,
      southWestLat: 34.775726,
      southWestLng: 126.318919
    },{
      name: 'Chungcheongbuk-do-Cheongju',
      center: new naver.maps.LatLng(35.1797765, 129.0750915),
      northEastLat: 36.755025,
      northEastLng: 127.180487,
      southWestLat: 36.581349,
      southWestLng: 127.331717
    },{
      name: 'Chungcheongnam-do-Cheonan',
      center: new naver.maps.LatLng(35.1797765, 129.0750915),
      northEastLat: 36.869354,
      northEastLng: 127.137299,
      southWestLat: 36.750046,
      southWestLng: 127.069055
    },{
      name: 'Jeju Island-Jeju City',
      center: new naver.maps.LatLng(35.1797765, 129.0750915),
      northEastLat: 33.517928,
      northEastLng: 126.525486,
      southWestLat: 33.201673,
      southWestLng: 126.194457
    },
    // 여기에 다른 도시 정보를 추가할 수 있습니다.
  ];

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