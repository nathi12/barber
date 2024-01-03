const mongoose = require('mongoose');

const haircutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    picture: {
        type: String
    }

});

const haircut = mongoose.model('haircut', haircutSchema);
module.exports = haircut;