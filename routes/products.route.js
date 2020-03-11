const express = require('express');

const router = express.Router();
const productModel = require('../models/products.model');
router.get('/products', (req, res, next) => {
    const query = req.query;
    if (query) {
        productModel.find({}, (err, data) => {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.json(data);
        })
    }
    else {
        const category = query.categoty;
        productModel.find({ category }, (err, data) => {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.json(data);
        })
    }

})

module.exports = router;