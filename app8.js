const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const path = require('path');
const static = require('serve-static');
app.use('/', static(path.join(__dirname, 'public')));
app.set('port', 3000);

app.use(function (req, res, next) {
    const paramID = req.body.id || req.query.id;
    const paramPassword = req.body.password || req.query.password;

    res.status(200).send(
        `<h1>서버에서 응답한 결과</h1>
        <div><p>Param id: ${paramID}</p></div>
        <div><p>Param password : ${paramPassword}</p></div>
        <br><br><a href="/login1.html">로그인 페이지로 돌아가기</a>
        `
    );
});

app.listen(app.get('port'), () => {
    console.log('Server listening on port 3000');
});
