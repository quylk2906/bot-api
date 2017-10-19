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


router.post('/add_update/', function (req, res, next) {
    let botData = new BotController({
        dataDialog: req.body["megaData"],
        greetingMessage: req.body["greetingMessage"],
        persistenMenu: {persistentMenu: "persistentMenu"},
        proactiveMessage: "proactiveMessage",
        card: {card: "card"}
    })

    let _id = "l7YNn4M5zX"
    botData.findOneAndUpdate(_id)
        .then(result => {
            console.log(result)
            res.send({"messgae": "ok"})
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
    // res.send(req.body)
});

// user=bEsJpygFb0

module.exports = router;
