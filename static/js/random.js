document.addEventListener('DOMContentLoaded', () => {
  let map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.5666102, 126.9783881),
    zoom: 10,
  });

  //* 랜덤한 위치로 이동하는 함수
  function moveToRandomLocation() {
    let newLat = 37.5 + Math.random() * 2; //* 위도 범위 (37.0 ~ 39.0)
    let newLng = 126.0 + Math.random() * 4; //* 경도 범위 (126.0 ~ 130.0)

    let newLocation = new naver.maps.LatLng(newLat, newLng);

    map.panTo(newLocation);
    map.setZoom(10 + Math.floor(Math.random() * 5));
  }

  const randomLocationBtn = document.getElementById('randomLocationBtn');

  //* 버튼 클릭 시 랜덤 위치로 이동 함수 호출

  randomLocationBtn.addEventListener('click', moveToRandomLocation);
});
