const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var MongoClient = require('mongoose').MongoClient

const memberRoutes = require('./api/routes/members');
const sensorRoutes = require('./api/routes/sensors');

var uri = "mongodb://EnvMaaS:u4xWTPFWBDD1wZ3W@envmaas-shard-00-00-yxwzs.mongodb.net:27017,"+
          "envmaas-shard-00-01-yxwzs.mongodb.net:27017,"+
          "envmaas-shard-00-02-yxwzs.mongodb.net:27017/test"+
          "?replicaSet=EnvMaaS-shard-0"+
          "&ssl=true"+
          "&authSource=admin";

MongoClient.connect(uri, function(err, db) {
  if ( e ) { console.error('Connection Failed');
    return console.log(e); }
  console.log("Connected");
  db.collection('Members').find().toArray(function(e,d) {
    if ( e ) { console.log('error'); console.log(e);  }
      console.log(d);
  });
    db.close();
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET, INSERT');
    return res.status(200).json({});
  }
  next();
});

// Request Handling Routes
app.use('/members', memberRoutes);
app.use('/sensors', sensorRoutes);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
