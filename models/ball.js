const mongoose = require("mongoose")
const ballSchema = mongoose.Schema({
    bColor: String,
    bShape: String,
    bSize: Number
})
module.exports = mongoose.model("ball",
    ballSchema)