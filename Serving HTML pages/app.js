const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});

  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
  myReadStream.pipe(res);
});

server.listen(3000, 'localhost');
console.log('Server created at http://localhost:3000');
