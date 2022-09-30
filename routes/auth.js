const express = require("express");
const router = express.Router();
const passport = require("passport");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// @desc Login
// @route GET/
router.get("/login", ensureGuest, (req, res) => {
  res.render("login");
});

// @desc Auth with Google
// @route GET /auth/google
// using the google strategy we have created
// passport.js, we obtain the scope of what
// is contained in the profile
router.get(
  "/google",
  ensureGuest,
  passport.authenticate("google", { scope: ["profile"] })
);

// @desc Google auth callback
// @route GET /auth/google/callback
// callback if it fails,
// redirect to home page if it passes
router.get(
  "/google/callback",
  ensureGuest,
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/");
  }
);

router.post(
  "/login",
  ensureGuest,
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

// @desc Logout user
// @route  /auth/logout
router.delete("auth/logout", (req, res) => {
  req.logOut();
  res.redirect("/");
});

module.exports = router;
