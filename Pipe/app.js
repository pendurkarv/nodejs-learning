const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');
    myReadStream.pipe(res);

    // var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');
    // myReadStream.on('data', function(chunk){
    //   console.log('New data received.');
    //   res.write('<p style="background-color: yellow;">' + chunk + '</p>');
    // });
});


server.listen(3000, 'localhost');
console.log('Server started at http://localhost:3000');
