const mongoose = require('mongoose');  
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    email: String,
    phoneNumber: String,
    category: {
        type: String,
        default: 'apartments',
        enum: ['cars', 'apartments', 'shopping', 'food', 'traveling'],
    },
    price: String,
    title: String
});

module.exports = mongoose.model('Listing', ListingSchema);