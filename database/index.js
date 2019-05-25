const mongoose = require('mongoose')

var db = mongoose.connect('mongodb://localhost/Product',{useNewUrlParser: true})


//Testing database connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Succesfully connected to database')
})

module.exports = db;