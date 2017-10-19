var express = require('express');
var router = express.Router();
const BotController = require('../controller/botController')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home/index', {
    title: 'BOT Framework',
    doc: undefined,
    data1: JSON.stringify({ message: "empty" }),
    data2: JSON.stringify({ message: "empty" }),
    data3: JSON.stringify({ message: "empty" })
  })
});

router.get('/:id', function (req, res, next) {
  let user_id = req.params.id
  let botData = new BotController({})
  botData.findOneByUserId(user_id)
    .then(doc => {
      res.render('home/index', {
        title: 'BOT Framework',
        doc: doc,
        data1: JSON.stringify(doc.data_dialog[0].content),
        data2: JSON.stringify(doc.data_dialog[1].content),
        data3: JSON.stringify(doc.data_dialog[2].content)
      })
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })
});

module.exports = router;
