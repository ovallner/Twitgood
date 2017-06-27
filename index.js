var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var things = require('./routes/users.js');
app.use('/api/users', things);

app.listen(3000);
