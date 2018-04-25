const mongoose = require('mongoose');
const Schema = mongoose.schema;

let TodoSchema = mongoose.Schema({
  item: String,
  createdAt: String,
});

module.exports = mongoose.model('Todo', TodoSchema);
