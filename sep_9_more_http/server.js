var http = require('http');
var Router = require('sea-d49-router');

var router = Router();
router.get('/greet', function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.write(JSON.stringify({msg: 'hello world'}));
  res.end();
});

var server = http.createServer(router.route);

server.listen(3000, function() {
  console.log('server up');
});
