const express = require('express');
const mustacheExpress = require('mustache-express');
const models = require('./models');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');


app.get('/', function(req, res){
  models.Todo.findAll().then(function(todos){
      res.render('index', {model:todos});
  });
});

app.post('/', function(req, res){
  models.Todo.create({
    
    title: req.body.title,
    priority: req.body.priority,
    due: new Date(req.body.due_date),
    assignee: req.body.assignee
  });
  res.redirect('/');
});

app.post('/complete/:id', function(req, res){
  models.Todo.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(todo){
    todo.completed = true;
    todo.save();  //allowing attribute to persist in database
  });
  res.redirect('/');
});

app.post('/update/:id', function(req, res){
  models.Todo.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(todo){
    res.render('update', {model:todo});
  });
});

app.post('/edit/:id', function(req, res){
  models.Todo.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(todo){
    todo.title = req.body.title;
    todo.priority = req.body.priority;
    todo.due = new Date(req.body.due_date);
    todo.assignee = req.body.assignee;
    todo.save();
  });
  res.redirect('/');
});


app.listen(3000);
