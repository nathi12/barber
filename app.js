require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');
const morgan = require('morgan')
const User = require('./models/user');
const Haircut = require('./models/haircut');
const { URLSearchParams } = require('url');
const haircut = require('./models/haircut');


const PORT = 3000;


/**
 * /**
 * setting up views
 *  */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'seeds')));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(methodOverride('_method'));



/**
 * middleware
 */
app.use(morgan('tiny'));
app.use('/', (req, res, next) => {
    next();
})


/**
 * connecting to the database
 */
mongoose.connect(process.env.PROD_DB)
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

app.post('/login/new', async (req, res) => {
    const { username, password } = req.body;
    const u = User.find({ username: username });
    const p = User.find({ password: password });

    if (u !== null & p !== null) {
        res.redirect('/home');
    } else {
        alert('incorrect credentials')
    }
    console.log(req.body);
})



/**
 * register
 */
app.get('/register', (req, res) => {
    res.render('register');
})
app.post('/register', async (req, res) => {
    const { password, confirmpassword } = req.body;
    if (password === confirmpassword) {
        const newUser = new User(req.body);
        await newUser.save();
        res.redirect('login');
    } else {
        alert('wrong passwords');
    }
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
 * Booking {Selecting the hair cut}
 */
app.get('/book/haircut', (req, res) => {
    Haircut.find({}).then(haircuts => {
        res.render('user/bookhaircut', { haircuts });
    }).catch(err => {
        console.log(err);
    })
})

/**
 * Booking {Selecting the time slot}
 */
app.get('/book/slot', (req, res) => {
    res.render('user/bookslot');
})

/**
 * users
 */
app.get('/users', (req, res) => {

    User.find({}).then((users) => {
        res.render('admin/users', { users });
    }).catch((error) => {
        console.log('error');
    })
})

/**
 * haircuts
 */
app.get('/haircut', (req, res) => {
    Haircut.find({}).then(haircuts => {
        res.render('user/haircuts', { haircuts });
    }).catch(error => {
        console.log(error);
    })
})

app.get('/add-haircut', (req, res) => {
    res.render('user/add-haircut');
})

app.use((req, res) => {
    res.status(404).render('error404');
});

app.listen(PORT, () => {
    console.log(`Server is running on port :${PORT}`);
})