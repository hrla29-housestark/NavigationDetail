const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/navigation')


//Testing database connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Succesfully connected to database')
})

