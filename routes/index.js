const express = require("express")
const router = express.Router()
const passport = require('passport')
const { ensureAuth, ensureGuest } = require("../middleware/auth")
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
// const { storage } = require('../cloudinary')

const Listing = require('../models/Listing')

// @desc Landing page
// @route GET/
router.get("/", (req, res) => {
  res.render("home")
})

// @desc Categories
// @route GET/
router.get("/category", (req, res) => {
  res.render("category")
})

// @desc Contact
// @route GET/
router.get("/contact-us", (req, res) => {
  res.render("contact-us")
})

// AUTHENTICATION ROUTES


// @desc Login
// @route GET/
// here, ensureGuest is called because...
// only a guest should see the login page (or beckon to login)
router.get("/login",  (req, res) => {
  res.render("login", {
    layout: 'login',
  })
})

// @desc Auth with Google
// @route GET /auth/google
// using the google strategy we have created
// passport.js, we obtain the scope of what
// is contained in the profile
router.get(
  "/google",
  // ensureGuest,
  passport.authenticate("google", { scope: ["profile"] })
)

// @desc Google auth callback
// @route GET /auth/google/callback
// callback if it fails,
// redirect to home page if it passes
router.get(
  "/google/callback",
  // ensureGuest,
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/")
  }
)

// @desc LogIN user
// @route POST /auth/logout
// router.post(
//   "/login",
//   // ensureGuest,
//   passport.authenticate("google", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//     failureFlash: true,
//   })
// )

// @desc Logout user
// @route  /auth/logout
router.delete("auth/logout", (req, res) => {
  req.logOut()
  res.redirect("/")
})

// LISTINGS ROUTES


// @desc Listings page
// @route GET /listings/listing
router.get('/listings', (req, res) => {
  res.render('listings/listings')
})

// @desc Show Add Listing Page
// @route GET /add-listing
// not supposed to be here though
router.get('/add-listing',  (req, res) => {
  res.render('listings/add-listing')
})

// @desc Add Listing
// @route POST /add-listing 
// router.route('/')
//     .post(upload.single('image'), async (req, res) => {
//     try {
//         let data = req.body
//         let image = req.file
//         await Listing.create(data, image)
//         res.redirect('/')
//     } catch (err) {
//         console.error(err)
//         console.log(err)
//         res.render('error/500')
//     }
// })

// router.post('/', async (req, res) => {
//     try {
//       res.send(req.body)
//       res.redirect('/')
//     } catch (err) {
//       console.error(err)
//       res.render('error/404')
//     }
//   })

module.exports = router
