const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Connnect to database
mongoose.connect('mongodb://todo_user:todo123@ds153835.mlab.com:53835/mytodo');
//Create a schema
var todoSchema = new mongoose.Schema({item: String});
var todo = mongoose.model('todo', todoSchema);
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {
  //Handle get request to list to-do items
  app.get('/todo', function(req, res){
    todo.find({}, function(err, data){
      if(err) throw err;
      res.render('todo', {todos: data});
    });
  });

  //Handle post request to add new item in to-do list
  app.post('/todo', urlencodedParser, function(req, res){
    var newTodo = todo(req.body).save(function(err, data){
      if(err) throw err;
      res.json(data);
    });
  });

  //Handle delete request to delete exising to-do item
  app.delete('/todo/:item', function(req, res){
    todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
      if(err) throw err;
      res.json(data);
    });
  });
}
