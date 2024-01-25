const mongoose = require('mongoose');
const haircut = require('../models/haircut');
require('dotenv').config();

mongoose.connect('mongodb://127.0.0.1:27017/barberdb')
    .then(() => {
        console.log('mongo connection open');
    })
    .catch((err) => {
        console.log('mongo error');
        console.log(err);
    })


// const newHaircut = new haircut({
//     name: 'Low Fade',
//     price: 30,
//     picture: '/img/card.jpg',
//     active: 1
// });

// newHaircut.save().then(() => {
//     console.log(newHaircut);
// }).catch(err => {
//     console.log('error');
//     console.log(err);
// })

const Haircuts = [
    {
        name: 'Low Fade',
        price: 30,
        picture: '/img/card.jpg',
        active: 1
    },
    {
        name: 'Low Fade',
        price: 30,
        picture: '/img/card.jpg',
        active: 1
    }
]

haircut.insertMany(Haircuts).then((res) => {
    console.log(res);
}).catch(error => {
    console.log(error);
})

