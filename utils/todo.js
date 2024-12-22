const Todo = require("../models/todos")
const UserUtil = require("../utils/user")


module.exports = class TodoUtil{
    /**all utils related to todo app*/ 

    static async getTodos(filterArgs){
        let {
            search, owner_id
        } = filterArgs

        let query = {}
        if (search){
            query.name = search
        }
        if(owner_id){
            let owner = await UserUtil.getUser(owner_id)
            if(!owner){
                throw new Error(`user with id: ${owner_id} not found`)
            }
            query.owner = owner
        }
        return await Todo.find(query)
    }

    static async getTodo(id){
        return await Todo.findById(id)
    }

    static async createTodo(data){
        let todo = new Todo(data)
        return await todo.save()
    }

    static async updateTodo(id, data){
        let updateData = {
            ...data
        }
        let todo = await Todo.findOneAndUpdate(
            {id},
            updateData,
            {new: true}
        )
        console.log("updated todo: ", todo)
    }

    static async deleteTodo(id){
        let todoToDelete = await Todo.deleteOne({id})
        console.log("deleted todo: ", todoToDelete)
        return todoToDelete
    }
}
