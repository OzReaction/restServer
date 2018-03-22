const mongoose = require('mongoose');
const MongoClient = require('mongoose').MongoClient;

const membersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  company: String,
  location: String
});

module.exports = mongoose.model('Members', membersSchema);
