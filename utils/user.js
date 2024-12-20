const settings = require("../settings")
const User = require("../models/user")

class UserUtil{
    /**
     * all utilities related to the user model
     * */ 

    async getUser(userId){
        let user = await User.findById(userId)
        return user
    }

    async getAllUsers(filterArgs){
        let query = {}
        let {
            id, username, first_name, last_name, email
        } = filterArgs

        if(id){
            query.id = id
        }
        if(username){
            query.username = username
        }
        if(first_name){
            query.first_name = first_name
        }
        if(last_name){
            query.last_name = last_name
        }
        if(email){
            query.email = email
        }
        let foundUsers = await User.findMany(query)
        console.log("all users found: ", foundUsers)
        return foundUsers
    }
}

module.exports = UserUtils
