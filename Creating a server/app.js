const http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'content-type': 'text/plain'});
  res.end('Hello from NodeJS server.');
});

server.listen(3000, 'localhost');
console.log('Server created on 3000 port at localhost');
