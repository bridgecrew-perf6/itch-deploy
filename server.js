// DEPENDENCIES
const express = require('express');
const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const methodOverride = require('method-override');

//DB
const db = require('./config/sequelize');


// CONFIG 
const config = require('./config/config.json');


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
const Usuario = require('./backend/models/Usuario');
require('./config/passport/passport')(passport);

// ROUTES
require('./backend/routes')(app, express, passport);

// sync db
db.sync();
app.listen(config.PORT, () => {
    console.log(`servidor levantado en el puerto ${config.PORT}` );
})