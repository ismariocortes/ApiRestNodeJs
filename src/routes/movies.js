/* 
    Created on : 20 jan 2021
    Author     : Mario Cortés
    Master     : Dirección y Gestión de Proyectos Web
    Asignatura : Ingeniería y Desarrollo en la Web
*/

const { Router } = require('express');
const router = Router();

// Se requieren los métodos del controlador de Movies
const {
    returnMovies,
    createNewMovie,
    deleteMovie,
    updateMovie
} = require('../controllers/movies');

/* Valida que el usuario esté logueado  */
const {isAuthenticated} = require('../helpers/auth');

/* Devuelve el json con todas las películas en la bd */
router.get('/', isAuthenticated, returnMovies);

/* Crea una nueva película y devuelve el json actualizado */
router.post('/', isAuthenticated, createNewMovie);

/* Actualiza una película y devuelve el json actualizado */
router.put('/:id', isAuthenticated, updateMovie);

/* Elimina una película y devuelve el json actualizado */
router.delete('/:id', isAuthenticated, deleteMovie);


module.exports = router;