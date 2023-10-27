document.addEventListener('DOMContentLoaded', () => {
  let map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.4562562, 126.7052062),
    zoom: 15,
  });

  //* 랜덤한 위치로 이동하는 함수
  function moveToRandomLocation() {
    // 인천 최북동단과 최남서단의 위도와 경도를 변수로 지정
    let northEastLat = 37.645806;  // 최북동단 위도
    let northEastLng = 126.678674; // 최북동단 경도
    let southWestLat = 37.301116;  // 최남서단 위도
    let southWestLng = 126.604511; // 최남서단 경도
    
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


