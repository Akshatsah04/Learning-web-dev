const User = require('../models/User')
const {StatusCodes}=require('http-status-codes')
const bcrupt = require('bcryptjs')

const register = async (req , res)=>{
    const newUser =await User.create({...req.body})
    res.status(StatusCodes.CREATED).send(newUser)
}
const login = async (req , res)=>{
    res.send("login user")
}

module.exports = {
    register,
    login
}