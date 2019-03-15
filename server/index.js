const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');

const app = express();

// 对body进行解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', api);

app.listen(3600);
console.log('success listen at port:3600......');