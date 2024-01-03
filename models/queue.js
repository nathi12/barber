const mongoose = require('mongoose');

const queueSchema = new mongoose.Schema({
    Day: {
        type: Date,
        required: true
    },
    BookingId: {
        type: ObjectId,
        required: true
    }
});
const queue = mongoose.model('queue', queueSchema);
module.exports = queue;