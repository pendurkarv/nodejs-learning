var counter = function(arr) {
  return 'There are ' + arr.length + ' elements in the array';
}

var adder = function(a, b) {
  return `Sum of the 2 numbers is ${a+b}`;
}

module.exports.pi = 3.142;
module.exports.counter = counter;
module.exports.adder = adder;

// Or use followin
