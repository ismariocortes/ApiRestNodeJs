/* 
    Created on : 20 jan 2021
    Author     : Mario Cortés
    Master     : Dirección y Gestión de Proyectos Web
    Asignatura : Ingeniería y Desarrollo en la Web
*/

// Usa el archivo server.js que contiene el módulo express
const app = require('./server');

// Accede al archivo database.js que realiza la conexión a la base de datos
require('./database');

// Servidor que escucha las peticiones
app.listen(app.get('port'), () => {
    console.log("Server on port ", app.get('port'));
});