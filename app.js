const dotenv = require('dotenv')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const path = require('path')
const connectDB = require('./config/db')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const { create } = require('express-handlebars')
const methodOverride = require('method-override')
const passport = require('passport')
const session = require('express-session')
const flash = require('connect-flash')
const indexRoutes = require('./routes/index')
const authRoutes = require('./routes/auth')
const listingRoutes = require('./routes/listing')
const MongoStore = require('connect-mongo')
const Listing = require('./models/Listing')
const makeMiddleware = require('multer/lib/make-middleware')
const { ensureAuth, ensureGuest } = require("./middleware/auth")

// loading the config files
dotenv.config({ path: './config/config.env' })

// passport config
require('./config/passport')(passport)

// connect the db
connectDB()

const app = express()

// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// HTTP request logger middleware 
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Handlebars helpers
const hbs = create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        foo() { return 'FOO!' },
        bar() { return 'BAR!' }
    }
})

// Handlebars
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", path.resolve(__dirname, "views"))

// loading static files
app.use(express.static(path.join(__dirname, 'public')))

// middleware to override the req.method property with a new value
app.use(methodOverride('_method'))

// express session middleware
// setting session expiry
const sessionConfig = {
    secret: 'thisshouldbeasecret',
    resave: false, // do not save session if nothing is changed
    saveUninitialized: false, // do not create a session until something ... 
    // is stored (new but unmodified)
    store: MongoStore.create({ mongoUrl: process.env.DB_URL })
}

// Session configureation
app.use(session(sessionConfig))

// Flash messages 
app.use(flash())

// passport Middleware
app.use(passport.initialize())
app.use(passport.session())
passport.use(new GoogleStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//flash middleware
app.use((req, res, next) => {
    res.locals.currentUser = req.user
    res.locals.success = req.flash('success')
    res.locals.error = req.flash('error')
    next()
})

// routes
app.use('/', indexRoutes) // index routes
app.use('/auth', authRoutes) // index routes
app.use('/listing', authRoutes) // listing routes


const port = process.env.PORT || 3000

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})

// server running in either
// production or development mode
app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on http://localhost:${port}`)
})