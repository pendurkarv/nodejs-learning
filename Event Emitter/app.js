var events = require('events');
var util = require('util');

var Person = function(name) {
  this.name = name;
}

util.inherits(Person, events.EventEmitter);

var amar = new Person('Amar');
var akhbar = new Person('Akhbar');
var anthony = new Person('Anthony');

var people = [amar, akhbar, anthony];

people.forEach(function(person) {
  person.on('speak', function(msg) {
    console.log(person.name + ' said: ' + msg);
  })
})

amar.emit('speak', 'Amar');
akhbar.emit('speak', 'Akhbar');
anthony.emit('speak', 'Anthony');
