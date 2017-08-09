const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use('/styles', express.static('styles'));
app.get('/', function(req, res){
  res.render('index');
});

app.get('/contact', function(req, res){
  res.render('contact', {query: req.query});
});

app.post('/contact', urlencodedParser,function(req, res){
  res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function(req, res){
  var data = {age: 27, job: 'Web Developer', hobbies: ['Eating', 'Gaming', 'Music']};
  res.render('profile', {name: req.params.name, data: data, query: req.query});
});

app.listen(3000);
