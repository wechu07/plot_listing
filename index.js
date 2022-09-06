if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
} //if we are still in production, pick the data from .env file

// const { config } = require('dotenv');
const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;
const Listing = require('./models/listings');

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

const port = process.env.PORT || 9000;

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/contact-us', (req, res) => {
    res.render('contact-us');
});

app.get('/category', (req, res) => {
    res.render('category');
});

app.get('/listing', (req, res) => {
    res.render('listings/listing');
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})

app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});