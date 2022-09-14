const mongoose = require('mongoose');  
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    email: String,
    phoneNumber: String,
    category: [String],
    price: [String],
    title: String
});

module.exports = mongoose.model('Listing', ListingSchema);