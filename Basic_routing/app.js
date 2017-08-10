const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req, res){
  if(req.url === '/' || req.url === '/home') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if(req.url === '/contact') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if (req.url === '/json') {
    var user = {name: 'Vidyadhar', age: 27};
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(user));
  } else {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(3000, 'localhost');
console.log('Server started at http://localhost:3000');
