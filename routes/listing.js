const express = require('express')
const router = express.Router()

const Listing = require('../models/Listing')

// @desc  Listings
//@route  GET /
router.get('/listings', (req, res) => {
    res.render('../listings/listings')
})

// @desc  Add listing
//@route  GET /
router.get('/add-listing', (req, res) => {
    res.render('../listings/add-listing')
  })

module.exports = router