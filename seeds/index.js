const mongoose = require('mongoose');
const Listing = require('../models/listings');
const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

// first of all clean it out
// async function
const seedDB = async () => {
    await Listing.deleteMany({});
    // const l = new Listing({ title: 'Sunshine Paradise Apartment'});
    // await l.save();
}

seedDB();