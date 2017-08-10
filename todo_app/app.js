const express = require('express');
const ejs = require('ejs');

//Include controllers
var todoController = require('./controllers/todoController');

var app = new express();

//Set up template engine
app.set('view engine', 'ejs');

//Static files
app.use(express.static('./public'));

//Fire controllers
todoController(app);

//liste to a port
app.listen(3000);
console.log('App started at http://localhost:3000');
