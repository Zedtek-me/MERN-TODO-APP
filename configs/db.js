const mongoose = require("mongoose")
const settings = require("../settings")


async function connectMongodb(){
    let connection = await mongoose.connect(
        settings.MONGODB_CONNECTION_URL
    )
    console.log("this is mongodb connection created: ", connection)
}

module.exports = connectMongodb
