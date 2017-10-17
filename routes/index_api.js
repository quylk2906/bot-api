var express = require('express');
var router = express.Router();
const BotController = require('../controller/botController')
/* GET home page. */
router.get('/', function (req, res, next) {
  let user_id = "WYntWxcGRW"
  let botData = new BotController({})
  botData.findOneByUserId(user_id)
    .then(doc => {
      res.render('home/index', {
        title: 'BOT Framework',
        doc: doc
      })
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })
});

module.exports = router;
