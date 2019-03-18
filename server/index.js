const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');

const app = express();

// 对body进行解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, GET, DELETE, OPTIONS"
    );
    next();
}
app.use(allowCrossDomain)
app.use('/api', api);

app.listen(3660);
console.log('success listen at port:3660......');