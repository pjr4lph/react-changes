// the server is collecting the current pagelist and saving to database according to date
// how does the user look up past lists? by date?
// what happens when an item is removed from the list?
// when something is removed save to database by date or title?
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
const todoController = require('./../todoController')
// making a server makes it possible to use same server for websockets
// const server = http.createServer(app);

// the database is going to save removed todoList items by date and list item
const dbURI = 'mongodb://ralph:pjr4lph@ds151558.mlab.com:51558/ralphs';

mongoose.connect(dbURI);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Connected to Database');
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './../index.html'));
});

app.get('/styles.css',(req, res) => {
  res.sendFile(path.join(__dirname, './../styles.css'));
});

app.get('/build/webpack-bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname , './../build/webpack-bundle.js'));
});

app.post('/addTodo', (req, res) => {console.log(todoController.createTodo)});

app.listen('3000', () => console.log('listening on 3000'));
