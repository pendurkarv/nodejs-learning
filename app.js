var events = require('events');
var util = require('util');

var Person = function(name) {
  this.name = name;
}

util.inherits(Person, events.EventEmitter);

var vidyadhar = new Person('vidyadhar');
var datta = new Person('datta');
var abhay = new Person('abhay');

var people = [vidyadhar, datta, abhay];

people.forEach(function(person) {
  person.on('speak', function(msg) {
    console.log(person.name + ' said: ' + msg);
  })
})

vidyadhar.emit('speak', 'I am Web Developer');
datta.emit('speak', 'I am tech lead');
abhay.emit('speak', 'I am Data architect');
