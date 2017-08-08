const fs = require('fs');

fs.unlink('./stuff/writeMe.txt', function() {
  fs.rmdir('stuff', function(){
    console.log('Directory removed');
  });
})
