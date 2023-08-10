// In ./src/config.confog.js

module.exports = {
    mongoose: {
        url: process.env.MONGODB_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
}