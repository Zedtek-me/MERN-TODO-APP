require("dotenv").config()


const MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL
const PORT = process.env.PORT


module.exports = {
    MONGODB_CONNECTION_URL,
    PORT
}
