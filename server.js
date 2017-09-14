// DEPENDENCIES
const express = require('express');
const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const methodOverride = require('method-override');



// CONFIG 
const config = require('./config/config.json');
// DATABASE
const db = require('./config/sequelize');

// MIDDLEWARES
app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(methodOverride("_method"));
app.use(express.static(__dirname + '/public'));

// AUTH
app.use(session({secret: '%$itch12$%'}));
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
require('./backend/routes')(app, express, passport, db);

app.listen(config.PORT, () => {
    console.log(`servidor levantado en el puerto ${config.PORT}` );
})