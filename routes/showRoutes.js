const express       = require('express');
const showRouter    = express.Router();
const Show          = require ('../models/showModel');
const ensureLogin   = require('connect-ensure-login');


showRouter.get('/shows', ensureLogin.ensureLoggedIn(), (req, res, next)=>{


Show.find()
.then((listOfShows)=>{
    res.render('user/showList', {listOfShows});
})
.catch((err)=>{
    next(err);
})
})

showRouter.get('/shows/search', (req, res, next)=>{
    const search = req.query.searchInput;
    Show.find({
        "title": {"$regex": search, "$options": "i"}
    })
    .then((shows)=>{
        res.render('user/showList', {listOfShows: shows});
    })
})

showRouter.get('/shows/:id',ensureLogin.ensureLoggedIn(), (req, res, next)=>{
    const id = req.params.id;
    Show.findById(id)
    .then((theShow)=>{
        res.render('user/showDetails', {theShow});
    })
    .catch((err)=>{
        next(err);
    })
})








module.exports = showRouter;