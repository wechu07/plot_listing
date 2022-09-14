const mongoose = require('mongoose');  
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    category: String,
    title: String,
    price: String,
    contact: String
});

module.exports = mongoose.model('Category', CategorySchema);