const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const createError = require('http-errors');
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));

const PORT = process.env.PORT || 3000;

const app = express();

const productApi = require('./routes/products.route')

app.use(morgan());
app.use(cors());
app.use(bodyParser({ urlencoded: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/shopping-e-commerce-app')));
app.use('/products', express.static(path.join(__dirname, 'dist/shopping-e-commerce-app')));
app.use('/api', productApi);
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err.status);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})