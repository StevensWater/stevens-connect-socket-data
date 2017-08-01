var config = require('./config.json');

var server     = require('http').createServer();
var io         = require('socket.io')(server);

io.on('connection', function (socket){
    console.log("Stevens Connect is going to send data");

    socket.on(config.listen-socket, function (message) {
        console.log('Incoming data from Stevens Connect ' + JSON.stringify(message));
    });

    socket.on('disconnect', function () {
        console.log("Stevens Connect has disconnected");
    });
});

server.listen(config.port);
console.log("Listening for connections on port " + config.port);
