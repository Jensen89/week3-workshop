const express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/www'));

let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('listening on *:3000');
    console.log("Server listening on: " + host + ":" + port);
});

app.get('/test', function(req, res) {
    res.sendFile(__dirname + '/www/test.html');
});
