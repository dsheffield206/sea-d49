'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.write('test server');
  res.end();
});

server.listen(3000);
