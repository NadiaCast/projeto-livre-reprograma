const mongoose = require("mongoose");
const consoleSchema = mongoose.Schema(
    {
        _id:{
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId()
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },

        valor: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            required: true,
        }
    },
    { timeStamp: true}
)

const model = mongoose.model("Planos", consoleSchema)

module.exports = model