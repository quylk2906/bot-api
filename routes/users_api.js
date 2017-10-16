var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const { Product, Test } = require('../models/products_model')


router.get('/', function (req, res, next) {
  let promise = Test.aggregate(
    [ 
      { $match: 
        { amount: { $lt: 5 } } 
      } 
    ],
    { readConcern: 
      { status: "A" } 
    })

  promise.then(docs => res.send(docs))
  //   {$match: {status: "A"}},
  //   {$group: {_id: "$cust_id", total: {$sum: "$amount"}}},
  //   {$sort: {total: 1}}

  // ]).exec((err, docs) => {
  // Test.find({status: "A"}), (err, docs) => { res.send(docs) })
  //res.send('respond with a resource');
});

router.post('/add', function (req, res, next) {
  Product.find((err, docs) => {
    res.json(docs)
  })
  //res.send('respond with a resource');
});

router.get('/getall', function (req, res, next) {
  Product.find((err, docs) => {
    res.json(docs)
  })
  //res.send('respond with a resource');
});

module.exports = router;
