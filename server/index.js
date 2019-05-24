const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const Product = require('../database/model.js')
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, '../static')))

app.get('/api/nav', (req,res) => {
    Product.find()
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => res.status(404).send('Error getting',err))
})


app.listen(port, () => console.log(`Listening port ${port}`))








// app.post('/api/nav', (req, res) => {
//     const {productID, productType,productName, imageUrl, rating,
//          comments, price, category, productNumber} = req.body;
//          Product.create({productID: productID, productType: productType,productName: productName, imageUrl: imageUrl, rating:rating ,
//             comments: comments, price:price, category:category, productNumber: productNumber })
//             .then(() => res.status(201).send('Succesfully  Posted'))
//             .catch(err => res.status(404).send('Error posting',err))
// })

// app.delete('/api/nav', (req, res) => {
//     const { productType } = req.query;
//     console.log(req.query)
//     Product.deleteOne({productType: productType})
//         .then(() => res.status(201).send('Succesfully deleted'))
//         .catch(err => res.status(404).send('Error deleting',err))
// })