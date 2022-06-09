const express = require('express')
const TodoModel = require('../models/todoSchema')

// * Create a Router
const router = express.Router()

//* GET TODOS
router.get('/', async (req, res) => {
   try {
       const todos = await TodoModel.find()
       res.status(200).json(todos)
   } catch (error) {
       console.log(error)
   }
})

//* CREATE TODOS
router.post('/', async (req, res) => {
    const todoData = req.body // gets the data from the request
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
router.get('/:id', async (req, res) => {
    const id = req.params.id

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
router.put('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const todo = await TodoModel.findByIdAndDelete(id)
        res.status(200).json({msg: 'Todo was deleted!'})
    } catch (error) {
        console.log(error);
    }
})

module.exports = router