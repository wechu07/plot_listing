const express = require('express');
const router = express.Router();

// @desc Landing page
// @route GET/
router.get('/', (req, res) => {
    res.render('home')
})

// @desc Categories
// @route GET/
router.get('/category', (req, res) => {
    res.render('category')
})

// @desc Contact
// @route GET/
router.get('/contact-us', (req, res) => {
    res.render('contact-us')
})

// @desc Contact
// @route POST/
// router.get('/add-listing', (req, res) => {
//     res.render('add-listing')
// })

module.exports = router