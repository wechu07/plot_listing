const express = require('express')
const router = express.Router()
const passport = require('passport')

// @desc Auth with Google
// @route GET /auth/google
// using the google strategy we have created 
// passport.js, we obtain the scope of what 
// is contained in the profile
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc Google auth callback
// @route GET /auth/google/callback
// callback if it fails, 
// redirect to home page if it passes
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/'}), (req, res) => {
    res.redirect('/')
})

// @desc Logout user
// @route  /auth/logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})


module.exports = router