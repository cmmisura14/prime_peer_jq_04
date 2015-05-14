var express = require('express');
var path = require('path');

var app = express();

var index = require('./routes/index');

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("Listening on port: ", port);
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

module.exports = app;