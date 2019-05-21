const mongoose = require('mongoose')

const navigationSchema = new mongoose.Schema({
   productId: Number,
   type: String,
   name: String,
   imageUrl: String,
   rating: Number,
   comments: Number,
   price: String,
   category: String
})


const Product = mongoose.model('products',navigationSchema)

module.exports = Product;

