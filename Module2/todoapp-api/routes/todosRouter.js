const express = require('express')
const TodoModel = require('../models/todoSchema')
const authMiddleware = require('../middleware/authMiddleware')

// * Create a Router
const router = express.Router()

//* GET TODOS
router.get('/', authMiddleware, async (req, res) => {
   try {
       const todos = await TodoModel.find()
       res.status(200).json(todos)
   } catch (error) {
       console.log(error)
   }
})

//* CREATE TODOS
router.post('/', authMiddleware, async (req, res) => {
    const todoData = req.body // gets the data from the request
    todoData.user = req.user.id
    console.log(todoData);
    try {
        const todo = await TodoModel.create(todoData) // create the todo in the db
        // send back the response
        res.status(201).json(todo)
        // res.status(201).json({data: todo})
    } catch (error) {
        console.error(error)
        res.status(400).json('Bad request!!!!!')
    }
})


//* GET TODO BY ID
router.get('/:id', authMiddleware, async (req, res) => {
    const id = req.params.id
    console.log(req.user);
    try {
        const todo = await TodoModel.findById(id)
        res.status(200).json(todo)
    } catch (error) {
        console.error(error)
        res.status(400).json({
            msg: 'Id not found'
        })
    }
})


//* UPDATE TODO BY ID
router.put('/:id',authMiddleware, async (req, res) => {
    const id = req.params.id
    const newTodoData = req.body
     try {
         //* find the todo by the id
         const todo = await TodoModel.findByIdAndUpdate(id, newTodoData, {new: true})
         res.status(202).json(todo)
     } catch (error) {
         console.log(error)
     }
})

//! DELETE A TODO
router.delete('/:id', authMiddleware, async (req, res) => {
    const id = req.params.id
    console.log('FROM DELETE', req.user);
    try {
        // first we find the todo we're going to delete
        const todoToDelete = await TodoModel.findById(id)
        console.log(todoToDelete);
        console.log(todoToDelete.user._id.toString(), '||', req.user.id);
        // Here we check that the user who created the Todo is the one asking to delete the Todo
        // By checking the IDs
        if (todoToDelete.user._id.toString() !== req.user.id){
            // if they are NOT the same we send error message
            return res.status(400).json({msg: 'Not Authorized!'})
        }
        // if they are the same IDs we delete it
        const todo = await TodoModel.findByIdAndDelete(id)
        res.status(200).json('Todo deleted by the user!')

    } catch (error) {
        console.log(error);
    }
})

module.exports = router