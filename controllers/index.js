const TodoUtil = require("../utils/todo")
const {
    SuccessResponse,
    ErrorResponse
} = require("../utils/response_utils")


class TodoController{
    static async getAllTodos(req, res, next){
        /**
         * returns all todos in the system
         * */ 
        let todos = await TodoUtil.getTodos(req.query)
        console.log("all todos from the controller file: ", todos)
        return new SuccessResponse("All todo retrieved successfully!", 200, todos).send(req, res)
    }

    static async getSingleTodo(req, res, next){
        let todo = await TodoUtil.getTodo(req.params.id)
        if(!todo){
            return new ErrorResponse("Todo not found!", 404).send(req, res)
        }
        return new SuccessResponse("Todo retrieved successfully!", 200, todo).send(req, res)
    }

    static async createTodo(req, res, next){
        let todo = await TodoUtil.createTodo(req.body)
        return new SuccessResponse("Todo created successfully!", 201, todo).send(req, res)
    }

    static async updateTodo(req, res, next){
        let todo = await TodoUtil.updateTodo(req.params.id, req.body)
        return new SuccessResponse("Todo updated successfully!", 200, todo).send(req, res)
    }

    static async deleteTodo(req, res, next){
        let todo = await TodoUtil.deleteTodo(req.params.id)
        return new SuccessResponse("Todo deleted successfully!", 200, todo).send(req, res)
    }
}

module.exports = TodoController
