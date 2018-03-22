const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const MongoClient = require('mongoose').MongoClient;

const Members = require('../models/members');

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /members'
  });
});

router.post('/', (req, res, next) => {
  const members = new Members({
    _id: new mongoose.Types.ObjectId(),
    company: req.body.company,
    location: req.body.location
  });
  members
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  res.status(201).json({
    message: 'Member created',
    member: members
  });
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered the special ID',
      id: id
    });
  }else{
    res.status(200).json({
      message: 'You passed an ID'
    });
  }
});

router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Updated Product!'
  });
});

router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted Product!'
  });
});

module.exports = router;
