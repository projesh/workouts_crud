// In ./src/routers/v1/index.js
const express = require('express')

const userRoute = require('./user.route')

const router = express.Router()

router.use('/user', userRoute)

module.exports = router;
