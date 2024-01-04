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
    Contact: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
});

const user = mongoose.model('user', userschema);
module.exports = user;