var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('This is home page.');
});

app.get('/contact', function(req, res){
  res.send('This is contact page.');
});

app.get('/profile/:id', function(req, res){
  res.send('Your ID is - ' + req.params.id);
});

app.listen(3000);
