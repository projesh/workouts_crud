// index.js

const express = require("express")
const bodyParser = require("body-parser")

// const v1Router = require("./v1/routers")
const v1WorkoutRouter = require("./v1/routers/workoutRoutes")

const app = express();
const PORT = process.env.PORT || 3000;

// app.use("/api/v1", v1Router);
app.use(bodyParser.json());

app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});

