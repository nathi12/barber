require('dotenv').config();
const mongoose = require('mongoose');
const haircut = require('../models/haircut');


//process.env.local_DB
mongoose.connect('')
    .then(() => {
        console.log('mongo connection open');
    })
    .catch((err) => {
        console.log('mongo error');
        console.log(err);
    })


const newHaircut = new haircut({
    name: 'mohawk',
    price: 35,
    picture: 'https://firebasestorage.googleapis.com/v0/b/random--stuff.appspot.com/o/mohawk.jpg?alt=media&token=299e44b7-d429-43cb-87ac-31f1b388d3a6',
    active: 1
});

newHaircut.save().then(() => {
    console.log(newHaircut);
}).catch(err => {
    console.log('error');
    console.log(err);
})

const Haircuts = [
    {
        name: 'Low Fade',
        price: 30,
        picture: 'https://firebasestorage.googleapis.com/v0/b/random--stuff.appspot.com/o/low-fade.jpg?alt=media&token=0095c638-bde5-4039-8002-648d72191065',
        active: 1
    },
    {
        name: 'Fade',
        price: 30,
        picture: 'https://firebasestorage.googleapis.com/v0/b/random--stuff.appspot.com/o/fade.jpg?alt=media&token=6ac85341-48c4-4a36-940b-ac995600f904',
        active: 1
    }
]

haircut.insertMany(Haircuts).then((res) => {
    console.log(res);
}).catch(error => {
    console.log(error);
})

