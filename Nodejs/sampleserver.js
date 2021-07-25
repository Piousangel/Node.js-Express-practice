const express = require('express');

const app = express();
const server = app.listen(3000, () =>{
    console.log('Start Server : localhost:3000');
});

app.set('views', __dirname + '/views');
//app.set('views', path.join(__dirname, 'views'));
// 화면 engine을 ejs로 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
    res.render('exindex.html')
})

app.get('/about', function(req, res){
    res.send('About page')
})

 