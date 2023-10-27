// script.js
const mapOptions = {
  center: new naver.maps.LatLng(37.5666102, 126.9783881), // 서울의 위도, 경도
  zoom: 10 // 초기 확대 레벨
};

const map = new naver.maps.Map('map', mapOptions);

// 지도에 마커 추가 예제
const marker = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.5666102, 126.9783881),
  map: map
});