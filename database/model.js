const mongoose = require('mongoose')
const db = require('./index.js')

mongoose.Promise = global.Promise;

const navigationSchema = new mongoose.Schema({
   productID: Number,
   productType: String,
   productName: String,
   imageUrl: String,
   rating: Number,
   comments: Number,
   price: Number,
   category: String,
   productNumber: Number
})


const Product = mongoose.model('Product',navigationSchema)

module.exports= Product;

