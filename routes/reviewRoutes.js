const express       = require('express');
const reviewRouter  = express.Router();
const Show          = require('../models/showModel');
const Movie         = require('../models/movieModel');

reviewRouter.get('/shows/:id/reviews/new', (req, res, next)=> {
    Show.findById(req.params.id)
    .then((theShow)=>{
        res.render('user/addReview', {theShow: theShow, theUser: req.user})
    })
    .catch((err)=>{
        next(err);
    })
});

reviewRouter.post('/shows/:id/reviews/create', (req, res, next)=>{
    Show.findByIdAndUpdate(req.params.id, {$push: {reviews: req.body}})
    .then((response)=>{
        res.redirect(`/shows/${req.params.id}`)

    })
    .catch((err)=>{
        next(err);
    });
});

reviewRouter.post('/shows/:id/reviews/delete/:reviewIndex', (req, res, next)=>{
    const showID = req.params.id;
    const reviewIndex = req.params.reviewIndex;
    Show.findById(showID)
    .then((theReview)=>{
        theReview.reviews.splice(reviewIndex,1)

    theReview.save()
    .then(()=>{
        res.redirect('/shows/' + showID)
    })
    .catch((err)=>{
        next(err);
    })
    })
})
reviewRouter.get('/movies/:id/reviews/new', (req, res, next)=> {
    Movie.findById(req.params.id)
    .then((theMovie)=>{
        res.render('user/addMovieReview', {theMovie: theMovie, theUser: req.user})
    })
    .catch((err)=>{
        next(err);
    })
});

reviewRouter.post('/movies/:id/reviews/create', (req, res, next)=>{
    Movie.findByIdAndUpdate(req.params.id, {$push: {reviews: req.body}})
    .then((response)=>{
        res.redirect(`/movies/${req.params.id}`)

    })
    .catch((err)=>{
        next(err);
    });
});

reviewRouter.post('/movies/:id/reviews/delete/:reviewIndex', (req, res, next)=>{
    const movieID = req.params.id;
    const reviewIndex = req.params.reviewIndex;
    Movie.findById(movieID)
    .then((theReview)=>{
        theReview.reviews.splice(reviewIndex,1)

    theReview.save()
    .then(()=>{
        res.redirect('/movies/' + movieID)
    })
    .catch((err)=>{
        next(err);
    })
    })
})

module.exports = reviewRouter;
