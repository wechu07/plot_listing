const express = require('express');
const router = express.Router();

const Listing = require('../models/Listing')

// @desc Listings page
// @route GET /listings/listing
router.get('/listing', (req, res) => {
    res.render('listings/listing')
})

// @desc Show Add Listing Page
// @route GET /add-listing
router.get('/add-listing', (req, res) => {
    res.render('listings/add-listing')
})

// @desc Add Listing
// @route POST /add-listing 
router.post('/add-listing', async (req, res) => {
    try {
        let data = req.body
        await Listing.create(data)
        res.redirect('/')
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
})

module.exports = router