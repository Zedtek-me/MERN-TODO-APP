const { Router } = require("express")
const todoRoutes = require("./todo")
const {
    auth    
} = require("../../middlewares/auths")

const router = Router()
router.use("/api/v1", auth, todoRoutes)
module.exports = router