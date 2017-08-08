const fs = require('fs');

//Synchronously
//fs.mkdirSync('test');
//fs.rmdirSync('test');

//Asynchronously
fs.mkdir('stuff', function(){
  fs.readFile('readMe.txt', 'utf8', function(err, data){
    if(err) {
      console.log('Error reading data from readme.txt - ' + err);
    } else {
      fs.writeFile('./stuff/writeMe.txt', data, function(err){
        if(err) {
          console.log('Error writing file in directory stuff - ' + err);
        } else {
          console.log('File written successfully.');
        }
      })
    }
  });
});
