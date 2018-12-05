var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text : {
    type: String,
    required: true
  },
  completed: {
    type: Boolean
  },
  completedAt : {
    type: Number
  }
});

var newTodo = new Todo({
  text: 'cook dinner'
});

var newTodo2 = new Todo({
  // text: 'go for run',
  completed: true,
  completedAt: 1900
})

module.exports = {Todo}
