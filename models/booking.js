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
    Time: {
        type: Date
    }
});


const booking = mongoose.model('booking', bookingSchema);
module.exports = booking