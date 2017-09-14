const express = require('express');
const app = express();
const config = require('./config/config.json');

app.use(express.static(__dirname + '/public'));

app.listen(config.PORT, () => {
    console.log(`servidor levantado en el puerto ${config.PORT}` );
})