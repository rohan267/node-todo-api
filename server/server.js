var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./model/todo');
var {User} = require('./model/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })

});

app.listen(3000, () => {
  console.log('started on port 3000');
})

  // newTodo.save().then((doc)=>{
  //   console.log('save ToDo: ' + doc);
  // },(e) => {
  //   console.log('unable to save');
  // });
  // newTodo2.save().then((doc)=>{
  //   console.log('save ToDo: ' + doc);
  // },(e) => {
  //   console.log('unable to save');
  // });
