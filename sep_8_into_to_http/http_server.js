'use strict';

var http = require('http');
var server = http.createServer(function(req, res) {
  if (req.url === '/greet') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write('hello from our super useful awesome server!');
    return res.end();
  }

  if (req.method === 'POST') {
    req.on('data', function(data) {
      var parsed = JSON.parse(data.toString());
      console.log(parsed.somevl);
    });

    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.write('{"msg": "success!"}');
    return res.end();
  }

  res.writeHead(404, {
    'Content-Type': 'text/plain'
  });

  res.write('page not foud');
  res.end();
});

server.listen(3000, function() {
  console.log('server up');
});
