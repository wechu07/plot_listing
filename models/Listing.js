const mongoose = require('mongoose');  
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    category: String,
    title: String,
    price: String,
    contact: String
});

module.exports = mongoose.model('Listing', ListingSchema);