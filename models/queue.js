const mongoose = require('mongoose');

const queueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Surname: {
        type: String,
        required: true
    },
    Time: {
        type: String,
        required: true
    },
    Date: {
        type: Date
    }
});
const queue = mongoose.model('queue', queueSchema);
module.exports = queue;