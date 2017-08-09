const express = require('express');
const ejs = require('ejs');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
  res.send('This is contact page.');
});

app.get('/profile/:name', function(req, res){
  var data = {age: 27, job: 'Web Developer', hobbies: ['Eating', 'Gaming', 'Music']};
  res.render('profile', {name: req.params.name, data: data});
});

app.listen(3000);
