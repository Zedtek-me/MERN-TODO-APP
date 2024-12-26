require("./configs/db")//connect to db
const express = require("express")
const dbConnection = require("./configs/db")
const baseRoutes = require("./routes/v1/index")
const path = require("path")

const app = express()
// configure necessary middlewares
app.use(express.json())
app.use(express.static(
    path.join(__dirname, "static")
))
app.use(baseRoutes)
app.get("*", (req, res, next)=> res.send("Invalid route!"))

module.exports = app
