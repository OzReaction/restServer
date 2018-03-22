const mongoose = require('mongoose');
const MongoClient = require('mongoose').MongoClient;

const sensorsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  company: String,
  location: String
});

module.exports = mongoose.model('Sensors', sensorsSchema);
