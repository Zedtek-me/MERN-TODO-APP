const { Router } = require("express")
const TodoController = require("../../controllers/index")

const router = Router()

router.get("/todo/all", TodoController.getAllTodos)
router.get("/todo/:id", TodoController.getSingleTodo)
router.post("/todo/create", TodoController.createTodo)
router.post("/todo/update/:id", TodoController.updateTodo)
router.post("/todo/delete/:id", TodoController.deleteTodo)

module.exports = router