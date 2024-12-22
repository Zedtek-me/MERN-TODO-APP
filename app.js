require("./configs/db")//connect to db
const express = require("express")
const dbConnection = require("./configs/db")
const baseRoutes = require("./routes/v1/index")

const app = express()
// configure necessary middlewares
app.use(express.json())
app.use(baseRoutes)
app.get("*", (req, res, next)=> res.send("Invalid route!"))

module.exports = app
