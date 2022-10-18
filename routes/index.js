const express = require('express')
const router = express.Router()

// @desc  Landing page
//@route  GET /
router.get('/', (req, res) => {
    res.render('home')
})

// @desc  Categories
//@route  GET /
router.get('/category', (req, res) => {
    res.render('category')
})

// @desc  Contact us
//@route  GET /
router.get('/contact-us', (req, res) => {
    res.render('contact-us')
})

// @desc  Login
//@route  GET /
router.get('/login', (req, res) => {
    res.render('login', {
        layout: 'login',
    })
})

// @desc  Listings
//@route  GET /
router.get('/listings', (req, res) => {
    res.render('listings/listings')
})

// @desc  Add listing
//@route  GET /
router.get('/add-listing', (req, res) => {
    res.render('listings/add-listing')
  })

// @desc  Add listing
//@route  POST /
router.post('/add-listing', async (req, res) => {
    try {
        await Listing.create(req.body)
        res.redirect('listings/add-listing')
    } catch (e) {
        console.error(e)
        res.render('error/500')
    }
  })

module.exports = router