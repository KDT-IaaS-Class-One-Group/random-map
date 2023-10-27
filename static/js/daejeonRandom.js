document.addEventListener('DOMContentLoaded', () => {
  let map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(36.350214, 127.384548),
    zoom: 15,
  });

  //* 랜덤한 위치로 이동하는 함수
  function moveToRandomLocation() {
    // 대전 최북동단과 최남서단의 위도와 경도를 변수로 지정
    let northEastLat = 36.414012;  // 최북동단 위도
    let northEastLng = 127.593538; // 최북동단 경도
    let southWestLat = 36.264035;  // 최남서단 위도
    let southWestLng = 127.312206; // 최남서단 경도
    
    // 새로운 위치 랜덤하게 생성
    let newLat = southWestLat + Math.random() * (northEastLat - southWestLat); //* 위도 범위 (37.0 ~ 39.0)
    let newLng = southWestLng + Math.random() * (northEastLng - southWestLng); //* 경도 범위 (126.0 ~ 130.0)

    let newLocation = new naver.maps.LatLng(newLat, newLng);

    map.panTo(newLocation);
  }

  const randomLocationBtn = document.getElementById('randomLocationBtn');

  //* 버튼 클릭 시 랜덤 위치로 이동 함수 호출

  randomLocationBtn.addEventListener('click', moveToRandomLocation);

  
});


