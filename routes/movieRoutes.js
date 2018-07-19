const express        = require('express');
const movieRouter    = express.Router();
const Movie          = require ('../models/movieModel');
const ensureLogin    = require('connect-ensure-login');


movieRouter.get('/movies', ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    Movie.find()
    .then((listOfMovies)=>{
        res.render('user/moviesList', {listOfMovies});
    })
    .catch((err)=>{
        next(err);
    })
})

movieRouter.get('/movies/search', ensureLogin.ensureLoggedIn('/'),(req, res, next)=>{
    const search = req.query.searchInput;
    Movie.find({
        "title": {"$regex": search, "$options": "i"}
    })
    .then((movies)=>{
        res.render('user/moviesList', {listOfMovies: movies})
    })
})

movieRouter.get('/movies/:id',ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    const id = req.params.id;
    const otherReviews = [];
    const myReviews = [];

    Movie.findById(id)
    .populate('reviews.reviewer')
    .then((theMovie)=>{
        theMovie.reviews.forEach(function(oneReview){
            console.log("oneReview: ", oneReview)
            if (oneReview.reviewer._id.equals(req.user._id)){
                myReviews.push(oneReview);
            }
            else {
                otherReviews.push(oneReview);
            }
        })
        res.render('user/movieDetails', {theMovie: theMovie, theUser: req.user, otherReviews: otherReviews, myReviews: myReviews});
    })
    .catch((err)=>{
        next(err);
    })
})






module.exports = movieRouter;