const DATABASE_URI = process.env.DATABASE_URI
const mongoose = require("mongoose")

const connect = async () => {
    try {
        mongoose.connect(DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }),
        console.log("Database conectada!!")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connect}