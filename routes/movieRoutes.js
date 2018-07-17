const express        = require('express');
const movieRouter    = express.Router();
const Movie          = require ('../models/movieModel');
const ensureLogin    = require('connect-ensure-login');


movieRouter.get('/movies', ensureLogin.ensureLoggedIn(), (req, res, next)=>{
    Movie.find()
    .then((listOfMovies)=>{
        res.render('user/moviesList', {listOfMovies});
    })
    .catch((err)=>{
        next(err);
    })
})

movieRouter.get('/movies/search', (req, res, next)=>{
    const search = req.query.searchInput;
    Movie.find({
        "title": {"$regex": search, "$options": "i"}
    })
    .then((movies)=>{
        res.render('user/moviesList', {listOfMovies: movies})
    })
})

movieRouter.get('/movies/:id',ensureLogin.ensureLoggedIn(), (req, res, next)=>{
    const id = req.params.id;
    Movie.findById(id)
    .then((theMovie)=>{
        res.render('user/movieDetails', {theMovie});
    })
    .catch((err)=>{
        next(err);
    })
})




module.exports = movieRouter;