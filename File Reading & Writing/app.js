var fs = require('fs');

//Synchronous Way
//var readMe = fs.readFileSync('readMe.txt', 'utf-8');
//fs.writeFileSync('writeMe.txt', readMe);

//Asynchronous or non-blocking way
fs.readFile('readMe.txt', 'utf-8', function(err,data) {
  console.log('Data read from readMe.txt - ' + data);

  //Writing file to writeMe.txt Asynchronously
  fs.writeFile('writeMe.txt', data, function(err) {
    console.log('Data written successfully.');
  });
});
console.log('Working on other stuff.');
