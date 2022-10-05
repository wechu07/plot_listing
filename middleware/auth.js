module.exports = {
    ensureAuth: function(req, res, next) {
        if (req.isAuthenticated()) { // if logged in
            return next() // continue
        } else {
            res.redirect('/login') // otherwise redirect them to login page
        }
    },
    ensureGuest: function(req, res, next) {
        if (req.isAuthenticated()) {
            res.redirect('/login')
        } else {
            return next()
        }
    }
}

