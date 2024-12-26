const settings = require("../../settings")
const User = require("../models/user")
const UserUtil = require("../utils/user")


exports.auth = async (req, res, next) => {
    let authToken = req.headers.Authorization
    let userId = req.headers["X-User-Id"]
    console.log(`token: ${authToken}\n\n\nuserId: ${userId}}`)
    if(!authToken && !userId){
        req.user = null;
        return next()
    }
    if(authToken){
        authToken = authToken.split(" ")[1]
    }
    if(userId){
        let user = await UserUtil.getUser(userId)
        console.log("user retrieved from middleware: ", user)
        req.user = user
    }
    return next(req, res)
}