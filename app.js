require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');
//const morgan = require('morgan')
const User = require('./models/user')


const PORT = 3000;


/**
 * /**
 * setting up views
 *  */
app.use(express.static(path.join(__dirname, 'assets')));
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


/**
 * middleware
 */
// app.use(morgan('tiny'));
// app.use('/', (req, res, next) => {
//     console.log('my first middleware');
//     next();
// })


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

app.get('/temp', (req, res) => {
    res.render('temp');
})

app.post('/login/new', async (req, res) => {
    console.log(req.body);
})


/**
 * register
 */
app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/user/register', async (req, res) => {
    const newUser = new User(req.body);
    console.log('new user');
    console.log(req.body);
    //await newUser.save();
    //res.redirect('login');
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

/**
 * Booking {time slot}
 */
app.get('/booking', (req, res) => {
    res.render('user/booking');
})


app.get('/booking-1', (req, res) => {
    res.render('user/booking-1');
})

/**
 * users
 */
app.get('/users', (req, res) => {
    res.render('admin/users');
})

/**
 * haircuts
 */

app.get('/haircuts', (req, res) => {
    res.render('user/haircuts');
})




// app.use((req, res) => {
//     res.status(404).render('error404');
// });


app.listen(PORT, () => {
    console.log(`Server is running on port :${PORT}`);
})