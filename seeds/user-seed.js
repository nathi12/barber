const mongoose = require('mongoose');
const User = require('../models/user');


mongoose.connect('').then(() => {
    console.log('database connected');
}).catch((err) => {
    console.log('mongo error');
    console.log(err);
})


const newUser = new User({

})

newUser.save().then(() => {
    console.log('saved');

}).catch((err) => {
    console.log(err);
})