// 환경변수에서 MAP_CLIENT_ID 값 가져오기
const mapClientId = process.env.MAP_CLIENT_ID;

console.log(mapClientId); 

// // Naver Maps API 동적으로 로드하기
// const script = document.createElement('script');
// script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${mapClientID}`;
// script.async = true;
// document.head.appendChild(script);