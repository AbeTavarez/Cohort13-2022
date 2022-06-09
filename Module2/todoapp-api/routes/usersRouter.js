const express = require('express')
const UserModel = require('../models/usersSchema')
// pulls out the two function we need from express validator
const {check, validationResult} = require('express-validator')

// * Create a Router
const router = express.Router()

//* Create or Register a new User
router.post('/', [
    check('username', "Username is required from Middleware!").notEmpty(),
    check("email", "Please use a valid email! from middleware").isEmail()
] ,async (req, res) => {
    const userData = req.body

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.json(errors.array())
    }

    try {
        const user = await UserModel.create(userData)
        res.status(201).json(user)
    } catch (error) {
        console.log(error)
        res.status(400).json('Bad request!!!!!')
    }
})

module.exports = router