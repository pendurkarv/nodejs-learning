const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

var app = new express();
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.get('/', function(req, res){
  res.render('index');
});

app.get('/profile/:name', function(req, res){
  var user = {name: req.params.name, age: 27, job: 'Developer'};
  res.render('profile', {user: user});
});

app.get('/contact', function(req, res){
  res.render('contact', {query: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
  console.log(req.body);
  res.render('contact-success', {data: req.body});
});

app.listen(3000);
