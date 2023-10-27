document.addEventListener('DOMContentLoaded', () => {
  let map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.5666102, 126.9783881),
    zoom: 15,
  });

  //* 랜덤한 위치로 이동하는 함수
  function moveToRandomLocation() {
    // 대전 최북동단과 최남서단의 위도와 경도를 변수로 지정
    let northEastLat = 37.701857;  // 최북동단 위도
    let northEastLng = 127.148242; // 최북동단 경도
    let southWestLat = 37.428725;  // 최남서단 위도
    let southWestLng = 126.767625; // 최남서단 경도
    
    // 새로운 위치 랜덤하게 생성
    let newLat = southWestLat + Math.random() * (northEastLat - southWestLat); 
    let newLng = southWestLng + Math.random() * (northEastLng - southWestLng); 

    let newLocation = new naver.maps.LatLng(newLat, newLng);

    map.panTo(newLocation);
  }

  const randomLocationBtn = document.getElementById('randomDaejeonBtn');

  //* 버튼 클릭 시 랜덤 위치로 이동 함수 호출

  randomLocationBtn.addEventListener('click', moveToRandomLocation);

  
});


