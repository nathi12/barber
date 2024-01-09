require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;


/**
 * /**
 * setting up views
 *  */
app.use(express.static(path.join(__dirname, 'assets')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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
    res.render('login');
})


/**
 * register
 */
app.get('/register', (req, res) => {
    res.render('register');
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
    res.render('user/home');
})

/**
 * Queue
 */

app.get('/queue', (req, res) => {
    res.render('admin/queue');
})





app.listen(PORT, () => {
    console.log(`Server is running on port :${PORT}`);
})