// In ./src/index.js
require('dotenv').config()
const mongoose = require('mongoose')

// app
const app = require('./app')
const config = require('./config/config')
const logger = require('./config/logger')

// const express = require("express")
// const bodyParser = require("body-parser")
// const apicache = require("apicache");
// // const v1Router = require("./v1/routers")
// const v1WorkoutRouter = require("./v1/routers/workoutRoutes")

// const app = express();
// const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

// // app.use("/api/v1", v1Router);
// app.use(bodyParser.json());// // app.use(cache("2 minutes"));
// app.use("/api/v1/workouts", v1WorkoutRouter);

let server;
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
    console.log('Connected to MongoDB')

    server = app.listen(PORT, () => {
        console.log(`API is listening on port ${PORT}`);
    });
}).catch(error => {
    console.log('Cannot connect to the database!', error)
    process.exit()
});

const exitHandler = () => {
    if (server) {
        server.close(() => {
            logger.info('Server closed')
            process.exit()
        })
    } else {
        process.exit(1)
    }
};

const unexpectedErrorHandler = (error) => {
    logger.error(error)
    exitHandler();
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection', unexpectedErrorHandler)

process.on('SIGTERM', () => {
    logger.info('SIGTERM received')
    if (server) {
        server.close()
    }
})
