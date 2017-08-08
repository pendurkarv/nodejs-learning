var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type' : 'application/json'});

  var myObj = {
    name: 'Vidyadhar',
    job: 'Web Developer',
    age:27
  };

  res.end(JSON.stringify(myObj));
});

server.listen(3000, 'localhost');
console.log('Server started at http://localhost:3000');
