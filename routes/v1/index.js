const { Router } = require("express")
const TodoController = require("../../controllers/index")

const route = Router()

route.get("/todo/all", TodoController.getAllTodos)
route.get("/todo/:id", TodoController.getSingleTodo)
route.post("todo/create", TodoController.createTodo)

module.exports = route