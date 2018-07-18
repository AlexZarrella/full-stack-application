const express       = require('express');
const showRouter    = express.Router();
const Show          = require ('../models/showModel');
const ensureLogin   = require('connect-ensure-login');


showRouter.get('/shows', ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{


Show.find()
.then((listOfShows)=>{
    res.render('user/showList', {listOfShows});
})
.catch((err)=>{
    next(err);
})
})

showRouter.get('/shows/search', ensureLogin.ensureLoggedIn('/') , (req, res, next)=>{
    const search = req.query.searchInput;
    Show.find({
        "title": {"$regex": search, "$options": "i"}
    })
    .then((shows)=>{
        res.render('user/showList', {listOfShows: shows});
    })
})

showRouter.get('/shows/:id',ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    const id = req.params.id;
    const otherReviews = [];
    const myReviews = [];
    Show.findById(id)
    .populate('reviews.reviewer')
    .then((theShow)=>{
        theShow.reviews.forEach(function(oneReview){
            if (oneReview.reviewer._id.equals(req.user._id)){
                myReviews.push(oneReview);
            }
            else {
                otherReviews.push(oneReview);
            }
        })
        res.render('user/showDetails', {theShow: theShow, theUser: req.user, otherReviews: otherReviews, myReviews: myReviews});
    })
    .catch((err)=>{
        next(err);
    })
})








module.exports = showRouter;