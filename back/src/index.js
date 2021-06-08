const express = require('express');
const cors = require('cors');

// inicializar la api
const app = express();

//Puerto
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//Base de datos
require('./config/connection');

//Rutass
app.use(require('./routes/Routes'));

//Levantar el servidor 
app.listen(app.get('port'), (err) => {
    if (err) {
        console.log(err); //open your eyes.. wake up, Link
    } else {
        console.log(`El Servidor esta en puerto: ${app.get('port')}`)
    }
});

