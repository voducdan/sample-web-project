const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const productModel = require('../models/products.model');

router.get('/products', (req, res, next) => {
    const { category } = req.query;
    if (category == 'undefined') {
        productModel.find({}, (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            res.json(data);
        })
    }
    else {
        productModel.find({ category }, (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            res.json(data);
        })
    }

})

router.get('/products/:id', (req, res,next) => {
    const _id = mongoose.Types.ObjectId(req.params.id);
    productModel.find({ _id }, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(data);
    })
})
module.exports = router;