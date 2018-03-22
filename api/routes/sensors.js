const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Sensor Fetched'
  });
});

router.post('/', (req, res, next) => {
  const sensor = {
    name: req.body.name,
    location: req.body.location
  }
  res.status(201).json({
    message: 'Sensors Created',
    sensor: sensor
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
