const express       = require('express');
const userRouter    = express.Router();
const User          = require ('../models/userModel');
const bcrypt        = require('bcryptjs');
const passport      = require('passport');
const ensureLogin = require('connect-ensure-login');
const Show          = require ('../models/showModel');
const Movie         = require ('../models/movieModel');
const flash        = require('connect-flash');

const uploadCloud  = require('../config/cloudinary');

userRouter.get('/', (req, res, next)=>{
    res.render('index', { "message": req.flash("error") });
});

userRouter.post('/login', passport.authenticate("local", {
    successRedirect: "/myprofile",
    failureRedirect: "/",
    failureFlash: true,
    passReqToCallBack: true
}))

userRouter.get("/logout", (req, res, next)=>{
    req.logout();
        res.redirect("/")
});

userRouter.get('/signup', (req, res, next)=>{
    res.render('signupPage')
});

userRouter.post('/signup', uploadCloud.single('photo'), (req, res, next)=>{
    const thePassword = req.body.password;
    const theUsername = req.body.username;
    const image       = req.file.url;

    if(thePassword === "" || theUsername === ""){
        res.render('signupPage', {errorMessage: "Please fill in both the username and password in order to create an account"})
        return;
    }
    User.findOne({'username': theUsername})
    .then((theUser)=>{
        if (theUser !== null){
            res.render('signupPage', {errorMessage: `Sorry, the username ${theUsername} is already taken` })
            return;
        }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(thePassword, salt);

    User.create({username: theUsername, password: hashedPassword, image: image})
    .then((response)=>{
        res.redirect('/')
    })
    .catch((err)=>{
        next(err);
    });
});
});

// userRouter.get('/profile/:id', (req, res, next)=>{
//     const userID = req.params.id;
//     User.findById(userID)
//     .then((theUser)=>{
//         res.render('user/userProfile', {theUser})
//     })
//     .catch((err)=>{
//         next(err);
//     })
// })

userRouter.get('/myprofile',ensureLogin.ensureLoggedIn(), (req, res, next)=> {
    const showsIReviewed = [];
    const moviesIReviewed = [];

    Show.find()
    .then((allTheShows)=>{
        allTheShows.forEach(function(eachShow){
            if (eachShow.reviews.some(function(eachReview){
                return eachReview.reviewer.equals(req.user._id)
            })){
                    showsIReviewed.push(eachShow)
                }
            })
    
    Movie.find()
    .then((allTheMovies)=>{
        allTheMovies.forEach(function(eachMovie){
            if (eachMovie.reviews.some(function(eachReview){
                console.log('each review: ', eachReview)
                return (eachReview.reviewer).equals(req.user._id)
            })){
                moviesIReviewed.push(eachMovie)
                console.log('moviesIReviewed.push(eachMovie) : ',moviesIReviewed )
            }
        })
    })      
    
            setTimeout(( ) => {
                res.render('user/userProfile', {theUser: req.user, showsIReviewed: showsIReviewed, moviesIReviewed: moviesIReviewed} )
            }, 100);    
        })
    })




    
    
 



module.exports = userRouter;