module.exports = {
    ensureAuth: function(req, res, next) {
        if (req.isAuthenticated()) { // f logged in
            return next() // continue
        } else {
            res.redirect('/') // otherwise redirect them home page
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

