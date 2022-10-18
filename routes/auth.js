const express = require('express')
const router = express.Router()

// @desc  Landing page
//@route  GET /
router.get('/google', (req, res) => {
    res.render('home')
})

// @desc  Categories
//@route  GET /
router.get('/categories', (req, res) => {
    res.render('category')
})

// @desc  Contact us
//@route  GET /
router.get('/contact', (req, res) => {
    res.render('contact-us')
})

// @desc  Login
//@route  GET /


// @desc  Listings
//@route  GET /
router.get('/listings', (req, res) => {
    res.render('listings/listings')
})

// @desc  Add listing
//@route  GET /
router
    .get('/listings', (req, res) => {
    res.render('listings/add-listing')
    .post()
})

module.exports = router