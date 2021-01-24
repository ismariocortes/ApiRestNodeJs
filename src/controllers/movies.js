/* 
    Created on : 20 jan 2021
    Author     : Mario Cortés
    Master     : Dirección y Gestión de Proyectos Web
    Asignatura : Ingeniería y Desarrollo en la Web
*/

const moviesCtrlr = {};

const Movie = require('../models/movies');

// Método que lista todas las movies guardadas en la bd
moviesCtrlr.returnMovies = async (req, res) => {
    const movies = await Movie.find().lean();
    console.log(movies);
    res.json(movies);
    /* res.render('cars/all-cars', { cars }); */
}

// Método que realiza el guardado de una nueva movie
moviesCtrlr.createNewMovie = async (req, res) => {
    console.log(req.body);
    const {
        title,
        director,
        year
    } = req.body;

    const newMovie = new Movie({
        title: title,
        director: director,
        year: year
    });
    await newMovie.save();
    const movies = await Movie.find().lean();
    console.log(movies);
    res.json(movies);
}

// Método que actualiza la información de un auto
moviesCtrlr.updateMovie = async (req, res) => {
    await Movie.findByIdAndUpdate(
        req.params.id,
        {
            title: req.body.title,
            director: req.body.director,
            year: req.body.year
        });
    const movies = await Movie.find().lean();
    console.log(movies);
    res.json(movies);
}


// Método que elimina una movie
moviesCtrlr.deleteMovie = async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    const movies = await Movie.find().lean();
    console.log(movies);
    res.json(movies);
}

module.exports = moviesCtrlr;