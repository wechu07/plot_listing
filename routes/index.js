const express = require('express');
const router = express.Router();

// @desc Landing page
// @route GET/
router.get('/', (req, res) => {
    res.render("main")
})

// @desc Landing page
// @route GET/
// router.get('/', (req, res) => {
//     res.send('plot listing')
// })

// router.get('/contact-us', (req, res) => {
//     res.render('contact-us')
// })

// router.get('/category', (req, res) => {
//     res.render('category');
// })

module.exports = router