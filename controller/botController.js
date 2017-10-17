var { BotData } = require('../models/bot_model')
const randomstring = require("randomstring")

class BotController {
    constructor(botData) {
        this.user_id = randomstring.generate(10)
        this.dataDialog = botData.dataDialog || {}
        this.greetingMessage = botData.greetingMessage || ""
        this.persistenMenu = botData.persistenMenu || {}
        this.proactiveMessage = botData.proactiveMessage || ""
        this.card = botData.card || {}
    }

    getBotDataByID(user_id) {
        var promise = BotData.findOne({ 'user_id': user_id })
        return promise
    }

    addNewData() {
        let newData = new BotData({
            user_id: this.user_id,
            data_dialog: this.dataDialog,
            greeting_message: this.greetingMessage,
            persisten_menu: this.persistenMenu,
            proactive_message: this.proactiveMessage,
            card: this.card
        })

        var promise = newData.save()
        return promise
    }

    findOneByUserId(user_id) {
        let promise = BotData.findOne({'user_id': user_id})
        return promise
    }
    
    findOneAndUpdate(user_id) {
        let promise = BotData.findOneAndUpdate( {'user_id': user_id}, {
            $set: {
                data_dialog: this.dataDialog,
                greeting_message: this.greetingMessage,
                persisten_menu: this.persistenMenu,
                proactive_message: this.proactiveMessage,
                card: this.card
            }
        })
        return promise
    }

    getAll() {
        return new Promise((resolve, reject) => {
            BotData.find((err, docs) => {
                if (err) reject(err)
                resolve(docs)
            })
        })
    }
}

module.exports = BotController