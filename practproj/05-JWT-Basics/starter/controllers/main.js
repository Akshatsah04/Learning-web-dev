const CustomAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const login = (req , res)=>{
    const {username , password}=req.body
    // console.log(username , password)
    if(!username || !password){
        throw new CustomAPIError('please provide email and password' , 400)
    }

    const id =new Date().getDate()

    const token = jwt.sign({id , username} , process.env.JWT_SECRET , {expiresIn:'30d'})

    res.status(200).json({msg:'user created' , token})
}


const dashboard = (req , res)=>{
//    console.log(req.user);

    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`helllo , ${req.user.username}` , secret:`here is your authoried data , your lucky number is ${luckyNumber}`})
   
}

module.exports = {
    login,
    dashboard
}