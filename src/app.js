// In ./app.js

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('./routers/v1');
const ApiError = require('./utils/ApiError');


const app = express();

// app.use(bodyParser.json());

// parse json request body
app.use(express.json())

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))

// enable cors
app.use(cors())
app.options('*', cors())

// v1 api toutes
app.use('/v1', routes)

app.use("/", (req, res) => {
    res.send({ message: 'Hellow world' })
})

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});



module.exports = app;
