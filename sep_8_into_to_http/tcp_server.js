'use strict';

var net = require('net');

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    console.log(data.toString());
  });

  socket.on('end', function() {
    console.log('disconnected');
  });
});

server.listen(3000);
