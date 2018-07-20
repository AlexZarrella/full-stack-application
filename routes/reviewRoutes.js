const express       = require('express');
const reviewRouter  = express.Router();
const Show          = require('../models/showModel');
const Movie         = require('../models/movieModel');
const ensureLogin   = require('connect-ensure-login');

reviewRouter.get('/shows/:id/reviews/new', ensureLogin.ensureLoggedIn('/'), (req, res, next)=> {
    Show.findById(req.params.id)
    .then((theShow)=>{
        res.render('user/addReview', {theShow: theShow, theUser: req.user})
    })
    .catch((err)=>{
        next(err);
    })
});

reviewRouter.post('/shows/:id/reviews/create',ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    const entireReview= {};
    entireReview.reviewer = req.user._id;
    entireReview.rating = req.body.rating;
    entireReview.content = req.body.content;


    Show.findByIdAndUpdate(req.params.id, {$push: {reviews: entireReview}})
    .then((response)=>{
        res.redirect(`/shows/${req.params.id}`)

    })
    .catch((err)=>{
        next(err);
    });
});

reviewRouter.get('/shows/:id/reviews/edit/:reviewIndex',ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    const reviewIndex = req.params.reviewIndex;

    Show.findById(req.params.id)
    .populate("reviews.reviewer")
    .then((theShow)=>{
        const entireReview= theShow.reviews[reviewIndex];

        res.render('user/editShowReviews', {theShow: theShow, reviewIndex: reviewIndex, review: entireReview });
    })
    .catch((err)=>{
        next(err);
    })

})

reviewRouter.get('/shows/:id/reviews/update/:reviewIndex', ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    const reviewIndex = req.params.reviewIndex;
    const updateReview = {
        reviewer: req.body.reviewer,
        rating: req.body.rating,
        content: req.body.content
    }
    Show.findByIdAndUpdate(req.params.id, {updateReview: updateReview, reviewIndex: reviewIndex}) 

.then((theShow)=>{
    res.redirect('/shows/' + theShow._id)
})

.catch((err)=>{
    next(err);
})
})

reviewRouter.post('/shows/:id/reviews/delete/:reviewIndex',ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
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
reviewRouter.get('/movies/:id/reviews/new',  ensureLogin.ensureLoggedIn('/'),(req, res, next)=> {
    Movie.findById(req.params.id)
    .then((theMovie)=>{
        res.render('user/addMovieReview', {theMovie: theMovie, theUser: req.user})
    })
    .catch((err)=>{
        next(err);
    })
});

reviewRouter.post('/movies/:id/reviews/create',ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    const entireReview= {};
    entireReview.reviewer = req.user._id;
    entireReview.rating = req.body.rating;
    entireReview.content = req.body.content;
    
    Movie.findByIdAndUpdate(req.params.id, {$push: {reviews: entireReview}})
    .then((response)=>{
        res.redirect(`/movies/${req.params.id}`)

    })
    .catch((err)=>{
        next(err);
    });
});

reviewRouter.get('/movies/:id/reviews/edit/:reviewIndex',ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    const reviewIndex = req.params.reviewIndex;

    Movie.findById(req.params.id)
    .populate("reviews.reviewer")
    .then((theMovie)=>{
        const entireReview= theMovie.reviews[reviewIndex];

        res.render('user/editMovieReviews', {theMovie: theMovie, reviewIndex: reviewIndex, review: entireReview });
    })
    .catch((err)=>{
        next(err);
    })

})

reviewRouter.get('/movies/:id/reviews/update/:reviewIndex', ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    const reviewIndex = req.params.reviewIndex;
    const updateReview = {
        reviewer: req.body.reviewer,
        rating: req.body.rating,
        content: req.body.content
    }
    Movie.findByIdAndUpdate(req.params.id, {updateReview: updateReview, reviewIndex: reviewIndex}) 

.then((theMovie)=>{
    res.redirect('/movies/' + theMovie._id)
})

.catch((err)=>{
    next(err);
})
})

reviewRouter.post('/movies/:id/reviews/delete/:reviewIndex', ensureLogin.ensureLoggedIn('/'),(req, res, next)=>{
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
