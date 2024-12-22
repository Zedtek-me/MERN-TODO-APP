const { Router } = require("express")
const todoRoutes = require("./todo")

const router = Router()
router.use("/api/v1", todoRoutes)
module.exports = router