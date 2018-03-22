const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const MongoClient = require('mongoose').MongoClient;

const Members = require('../models/members');

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Member Fetched'
  });
});

// Add a Member
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

router.get('/:members', (req, res, next) => {
  const id = req.params.productId;
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered the special ID',
      compan: company
    });
  }else{
    res.status(200).json({
      message: 'You passed an ID'
    });
  }
});

router.patch('/:members', (req, res, next) => {
  res.status(200).json({
    message: 'Updated Member!'
  });
});

router.delete('/:members', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted Member!'
  });
});

module.exports = router;
