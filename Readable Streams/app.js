const fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');

myReadStream.on('data', function(chunk){
  console.log('----- New data arrived -----');
  console.log(chunk);
});
