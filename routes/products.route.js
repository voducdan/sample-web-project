const express = require('express');

const router = express.Router();
const productModel = require('../models/products.model');
router.get('/products', (req, res, next) => {
    productModel.find({}, (err, data) => {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(data);
    })
})

module.exports = router;