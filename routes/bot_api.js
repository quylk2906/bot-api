var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const { BotData } = require('../models/bot_model')
const BotController = require('../controller/botController')
const _ = require('lodash')
var body = require('./req_body')

router.get('/get-bot-data/:userID', function (req, res, next) {
    let _id = req.params.userID
    let botData = new BotController({})
    botData.getBotDataByID(_id)
        .then(result => res.send(result))
        .catch(err => res.send(err))
});


router.post('/add_update/:userID', function (req, res, next) {
    let _id = req.params.userID
    let json = body.getDataFromRequest(req.body)
    let botData = new BotController(json)
    botData.findOneAndUpdate(_id)
        .then(result => res.send(result))
        .catch(err => res.send(err))
});

// user=bEsJpygFb0

module.exports = router;
