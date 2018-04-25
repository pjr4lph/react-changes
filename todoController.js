const Todo = require('./todoModel');

const todoController = {};
// this controller is going to save every removed todo list item and retrieve those list items
// it can retrieve by item name or by date (cratedAt)
todoController.createTodo = function(req, res) {
  Todo.create({
    item: req.body.value,
    createdAt: req.body.createdAt,
  }, (err, result) => {
    if (err) res.status(418).end();
    else {
      res.send('saved!');
    }
  });
}

todoController.findTodo = (req, res) => {
  Todo.findOne({
    item: req.body.value
  }, 'createdAt', (err, result) => {
    if (err) res.send(418);
    else {
      res.send(result);
    }
  });
}

todoController.findTodoByDate = (req, res) => {
  Todo.find({
    createdAt: req.body.createdAt
  }, 'item', (err, result) => {
    if (err) res.send(418);
    else {
      res.send(result.item);
    }
  });
}

todoController.findAllTodos = (req, res) => {
  Todo.find({});
}

module.exports = 'todoController';
