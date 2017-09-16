var express  = require('express');
var http = require('http');
var path = require('path');

var app = express();
var port =8878;

var route = require('./routes');
app.use('/',route);

var server = http.createServer(app).listen(port, function () {
    console.log('Express server listening on port',port);
});