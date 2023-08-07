// In
const workoutRecordsService = require("../servers/recordService")

const getRecordForWorkout = (req, res) => {
    console.log('Record controller')
    const {
        params: { workoutId },
    } = req;
    try {
        const allRecordsFromWOrkout = workoutRecordsService.getRecordForWorkout(workoutId);
        res.send({ status: "OK", data: allRecordsFromWOrkout })
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}
module.exports = {
    getRecordForWorkout
}
