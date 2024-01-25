const mongoose = require('mongoose');


const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    contact: {
        type: String
    },
    dateregistered: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        required: true
    },
    active: {
        type: Number,
        default: 1
    }
});

const user = mongoose.model('user', userschema);
module.exports = user;