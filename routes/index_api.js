var express = require('express');
var router = express.Router();
const BotController = require('../controller/botController')
/* GET home page. */
router.get('/', function (req, res, next) {
  let user_id = "WYntWxcGRW"
  let botData = new BotController({})
  botData.findOneByUserId(user_id)
    .then(doc => {
      console.log(doc.data_dialog[0].content[0])
      res.render('home/index', {
        title: 'BOT Framework',
        doc: doc,
        data1: doc.data_dialog[0].content,
        data2: doc.data_dialog[1].content,
        data3: doc.data_dialog[2].content
      })
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })
});

module.exports = router;
