/* 
    Created on : 20 jan 2021
    Author     : Mario Cortés
    Master     : Dirección y Gestión de Proyectos Web
    Asignatura : Ingeniería y Desarrollo en la Web
*/

const { Router } = require('express');
const router = Router();
/* const us = require('underscore'); */

/* const movies = require('../sample.json'); */
/* console.log(movies); */

// Se requieren los métodos del controlador de Movies
const {
    returnMovies,
    createNewMovie,
    deleteMovie,
    updateMovie
} = require('../controllers/movies');

const {isAuthenticated} = require('../helpers/auth');

router.get('/', isAuthenticated, returnMovies);

 /* router.post('/', (req, resp) => {
    const { title, director, year } = req.body;
    if(title && director && year){
        const id = movies.length + 1;
        const newMovie = {id,...req.body};
        movies.push(newMovie);
        resp.json(movies);
    }else{
        resp.send('wrong request');
    }
}); */
router.post('/', isAuthenticated, createNewMovie);

/*router.put('/:id', (req, res) => {
    const {id} = req.params;
    const { title, director, year } = req.body;
    if(title && director && year){
        us.each(movies, (movie, i) => {
            if(movie.id == id){
                movie.title = title;
                movie.director = director;
                movie.year = year;
            }
        });
        res.json(movies);
    }else{
        res.status(500).json({'error': 'hubo un error'});
    }

});
 */
router.put('/:id', isAuthenticated, updateMovie);

/* router.delete('/:id', (req, res) => {
    const { id } = req.params;
    us.each(movies, (movie, i) => {
        if(movie.id == id){
            movies.splice(i, 1);
        }
    });
    res.send(movies);
}); */
router.delete('/:id', isAuthenticated, deleteMovie);


module.exports = router;