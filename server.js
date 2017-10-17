// DEPENDENCIES
const express = require('express');
const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const methodOverride = require('method-override');

// CONFIG ENVIROMENT
require('dotenv').config()
const PORT = (process.env.NODE_ENV === 'development') ? 3000 : 80;



// MIDDLEWARES
app.set('view engine', 'pug');
app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(methodOverride("_method"));
app.use(express.static(__dirname + '/public'));

// AUTH
app.use(session({secret: '%$itch12$%', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport/passport')(passport);

// ROUTES
require('./backend/routes')(app, express, passport);

// sync db
// db.sync();
app.listen(PORT, () => {
    console.log(`servidor levantado en el puerto ${PORT}` );
})