const express = require('express')
const UserModel = require('../models/usersSchema')

// * Create a Router
const router = express.Router()

//* Create a new User
router.post('/', async (req, res) => {
    const userData = req.body

    try {
        const user = await UserModel.create(userData)
        res.status(201).json(user)
    } catch (error) {
        console.log(error)
        res.status(400).json('Bad request!!!!!')
    }
})

module.exports = router