const mongoose = require('mongoose');

const BotDataSchema = mongoose.Schema({
    user_id: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'UserFB',
        required: true
    },
    data_dialog: {
        type: Object,
        count: Number,
        default: null
    },
    greeting_message: {
        type: String,
        default: ""
    },
    persisten_menu: {
        type: Object,
        count: Number,
        default: null
    },
    card: {
        type: Object,
        count: Number,
        default: {}
    },
    proactive_message: {
        type: String,
        default: ""
    }
}, {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    })

BotDataSchema.pre('save', function (next) {
    var self = this;
    self.created_at = new Date();
    next()
})

// var updateDate = function (next) {
//     var self = this;
//     self.updated_at = new Date();
//     if (!self.created_at) {
//         self.created_at = now;
//     }
//     next()
// }


// BotDataSchema.pre('update', updateDate)
//     .pre('findOneAndUpdate', updateDate)
//     .pre('findByIdAndUpdate', updateDate)



var BotData = mongoose.model('BotData', BotDataSchema)

module.exports = { BotData }