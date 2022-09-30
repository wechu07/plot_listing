const express = require("express")
const router = express.Router()
const { ensureAuth, ensureGuest } = require("../middleware/auth")
const passport = require('passport')

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

// @desc Show Add Listing Page
// @route GET /add-listing
// not supposed to be here though
router.get("/add-listing", ensureAuth, (req, res) => {
  res.render("listings/add-listing")
});

module.exports = router
