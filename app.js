require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = 3000;


/**
 * connecting to the database
 */

mongoose.connect(process.env.local_DB)
    .then(() => {
        console.log('database connected');
    }).catch((err) => {
        console.log('mongo error');
        console.log(err);
    })


/**
 * login
 *  */
app.get('/login', (req, res) => {

})


/**
 * register
 */
app.get('/register', (req, res) => {

})

/**
 * Landing page
 */

app.get('/welcom', (req, res) => {

})


/**
 * Home page
 */
app.get('/home', (req, res) => {

})





app.listen(PORT, () => {
    console.log(`Server is running on port :${PORT}`);
})