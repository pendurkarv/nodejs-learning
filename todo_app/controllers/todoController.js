const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});
var data = [
  {item: 'get milk'},
  {item: 'clean room'},
  {item: 'write some code'}
];

module.exports = function(app) {

  //Handle get request to list to-do items
  app.get('/todo', function(req, res){
    res.render('todo', {todos: data});
  });

  //Handle post request to add new item in to-do list
  app.post('/todo', urlencodedParser, function(req, res){
    data.push(req.body);
    res.json(data);
  });

  //Handle delete request to delete exising to-do item
  app.delete('/todo/:item', function(req, res){
    data = data.filter(function(todo){
      //Remove item in to-do list if matched with item in delete request
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });

    res.json(data);
  });

}
