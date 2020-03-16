const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true,useUnifiedTopology:true })
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));


const PORT = process.env.PORT || 3000;

const app = express();

const productApi = require('./routes/products.route')

// app.use(morgan());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist/shopping-e-commerce-app')));
app.use('/products', express.static(path.join(__dirname, 'dist/shopping-e-commerce-app')));
app.use('/products/:id', express.static(path.join(__dirname, 'dist/shopping-e-commerce-app')));
app.use('/api', productApi);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

module.exports = app;