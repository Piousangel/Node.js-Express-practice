const express = require('express');
const app = express();

//nodemon server.js  => cntl C 안해도 새로고침 가능

app.listen(8080, function(){
    console.log('listenling on 8080')
});

// app.get('/' , function(req, res){
//     res.send('기본페이지입니다.');
// });

app.get('/pet', function(req, res){      //요청, 응답
    res.send('반갑습니다 펫페이지입니다.');
});

app.get('/beauty', function(req, res){
    res.send('뷰티용품페이지 입니다');
}); 

app.get('/', function(req,res){
    res.sendFile( __dirname + '/index.html');
});