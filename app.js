const express = require("express")
const dbConnection = require("./configs/db")
const { Router } = require("express")
const todoRoutes = require("./routes/v1/index")
// connect to db
dbConnection()
// configure root routes
const router = Router()
router.use("/api/v1", todoRoutes)
router.get("*", (req, res, next)=> res.send("Invalid route!"))

const app = express()

// configure necessary middlewares
app.use(express.json())

module.exports = app
