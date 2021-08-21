const express = require('express');
const Product = require('../models/productModel');
const getToken = require('../util');

const router = express.Router();


router.get('/', async (req, res) => {
    const products = await Product.find({})
    res.status(200).json(products)
});

router.post('/', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        price: req.body.price,
        countInStock: req.body.countInStock,
        description: req.body.description,
        // rating: req.body.rating,
        // numReviews: req.body.numReviews
    })

    const newProduct = await product.save();
    if (newProduct) {
        return res.status(201).json({ message: 'New Product Created', data: newProduct })
    }
    return res.status(500).json({ message: 'Error in Creating Product' })
})
module.exports = router;