const dotenv = require('dotenv')
const express = require('express')
const path = require('path')
const connectDB = require('./config/db')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const methodOverride = require('method-override')
const Listing = require('./models/listings')

// loading the config files
dotenv.config({ path: './config/config.env' })

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
app.set("views", path.resolve(__dirname, "./views"));

// routes
app.use('/', require('./routes/index'))

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