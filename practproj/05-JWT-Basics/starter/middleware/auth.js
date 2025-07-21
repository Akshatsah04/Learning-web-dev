const CustomAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const authenticationmiddleware = async (req , res , next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomAPIError('no token provided' , 401)
    
    }

    const token = authHeader.split(' ')[1]
    // console.log(token);


    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // console.log(decoded);
        const {id , username} = decoded

        req.user={id , username}

        next()
    }catch(err){
        throw new CustomAPIError('not authrized to access this route' , 401)

    }

   
}

module.exports = authenticationmiddleware