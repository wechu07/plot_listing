const mongoose = require('mongoose');  
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    email: {
        type: 'string',
        required: true,
        lowercase: true
    },
    phoneNumber: {
        type: 'string',
        required: true
    },
    category: {
        type: [String],
        default: 'apartments',
        enum: ['cars', 'apartments', 'shopping', 'food', 'traveling'],
    },
    title: String,
    price: String
});

module.exports = mongoose.model('Listing', ListingSchema);

// await Listing.create({ name: 'not a status' }); // throws validation error
// await Listing.create({ name: 'valid' }); // works