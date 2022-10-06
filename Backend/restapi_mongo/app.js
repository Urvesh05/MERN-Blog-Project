const express = require('express');
const app = express();
require('./db/conn');
// require('./db_connect/conn');
// const testDB = require('./models/schema');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const studenRoute = require('./api/routes/student');
const faculty = require('./api/routes/faculty');
const product = require('./api/routes/product');
const user = require('./api/routes/user');

app.use('/student', studenRoute);
app.use('/faculty', faculty);
app.use('/product', product);
app.use('/user', user);

app.use((req, res, next) => {
    res.status(404)
        .json({ msg: 'bad request!' })
})

app.use((req, res, next) => {
    res.status(200)
        .json({ message: 'app is running...' })
})

module.exports = app;