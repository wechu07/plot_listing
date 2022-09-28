const dotenv = require('dotenv')
const express = require('express')
const path = require('path')
const connectDB = require('./config/db')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const methodOverride = require('method-override')
const passport = require('passport')
const session = require('express-session')
const Listing = require('./models/Listing')
const makeMiddleware = require('multer/lib/make-middleware')

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

// Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"))

// express session middleware
app.use(session({
    secret: 'thisshouldbeasecret',
    resave: false, // do not save session if nothing is changed
    saveUninitialized: false // do not create a session until something is stored
}))

// passport Middleware
app.use(passport.initialize())
app.use(passport.session())

// routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/listings', require('./routes/listings'))

const port = process.env.PORT || 3000;

// app.use(methodOverride('_method'));

// loading static files
app.use(express.static(path.join(__dirname, 'public')));

// app.use((err, req, res, next) => {
//     const { statusCode = 500 } = err;
//     if (!err.message) err.message = 'Oh No, Something Went Wrong!'
//     res.status(statusCode).render('error', { err })
// })


// server running in either
// production or development mode
app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on http://localhost:${port}`);
});