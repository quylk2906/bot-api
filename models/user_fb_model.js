const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const config = require('../config/config.json')

const UserFBSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: [10, "Email requied length > 10"],
        unique: true,
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        minlength: [5, "User requied length > 5"],
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Pass requied length > 6"],
    },
    phone: {
        type: String,
        required: true,
        minlength: [10, "Phone requied length > 10"],
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
}, {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    })

    
UserFBSchema.pre('save', function (next) {
    var user = this
    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
})

var updateDate = function (next) {
    var user = this;
    user.updated_at = new Date();
    next()
}
UserFBSchema.pre('update', updateDate)
// .pre('findByIdAndUpdate', updateDate)
UserFBSchema.pre('findOneAndUpdate', function (next) {
    var user = this;
    var new_pwd = this.getUpdate().$set.password
    console.log("findOneAndUpdate: " + new_pwd)
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(new_pwd, salt, (err, hash) => {
            this.findOneAndUpdate({}, {
                password: hash
            })
            next()
        })
    })
    next()
})

var UserFB = mongoose.model('UserFB', UserFBSchema)
module.exports = { UserFB }