const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        required: true
    },
    HaircutId: {
        type: ObjectId,
        requied: true
    },
    Slot: {
        type: Date
    },
    DateBook: {
        type: Date,
        default: Date.now
    }
});


const booking = mongoose.model('booking', bookingSchema);
module.exports = booking