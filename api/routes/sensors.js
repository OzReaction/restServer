const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const MongoClient = require('mongoose').MongoClient;

const Sensors = require('../models/sensors');

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Sensor Fetched'
  });
});

// Add a Sensor
router.post('/', (req, res, next) => {
  const sensors = new Sensors({
    _id: new mongoose.Types.ObjectId(),
    company: req.body.company,
    location: req.body.location
  });
  sensors
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  res.status(201).json({
    message: 'Sensor Added',
    sensors: sensors
  });
});

router.get('/:company', (req, res, next) => {
  res.status(200).json({
    message: 'Sensor Details',
    company: req.params.company
  });
});

router.delete('/:company', (req, res, next) => {
  res.status(200).json({
    message: 'Sensor Deleted',
    company: req.params.company
  });
});

module.exports = router;
