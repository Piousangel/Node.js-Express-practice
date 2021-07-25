//웹 HTTP를 이용해서 저희 API서버에 URL 방식으로 데이터를 호출하는 REST API방식으로 제공함

const express = require('express');
const app = express();

// const server = app.listen(3001, function(){
//     console.log("port 3000 is open");
// });

const server = app.listen(3001, () => {
    console.log('Start Server : localhost:3001');
});

app.get('api/users/:type' async(req, res) =>{
    res.send('connect.');
});