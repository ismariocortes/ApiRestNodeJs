/* 
    Created on : 20 jan 2021
    Author     : Mario Cortés
    Master     : Dirección y Gestión de Proyectos Web
    Asignatura : Ingeniería y Desarrollo en la Web
*/

/* Modules */
const express = require ('express');
const morgan = require('morgan');

/* inicializations */
const app = express();

/* settings */
app.set('port', process.env.PORT || 3000);

/* middlewares */
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json()); // Permite al servidor entender formato json


/* routes */
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/users',require('./routes/users'));

module.exports = app;