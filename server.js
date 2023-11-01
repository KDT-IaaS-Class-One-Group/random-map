const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// 네이버 지도 API를 사용하기 위한 코드
const mapClientId = process.env.MAP_CLIENT_ID;
const naver = require('@navercorp/mapjs-sdk')({
  apikey: mapClientId
});

app.use('/static',express.static(path.join(__dirname, 'static')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'))
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 포트에서 실행 중`);
});