const bcrupt = require('bcryptjs')
const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , 'please provide name'],
        minlength:3,
        maxlength:50
    },
    email:{
        type:String,
        required:[true , 'please provide email'],
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ , 
            'please provide valid email'],
        unique:true
    },
    password:{
        type:String,
        required:[true , 'please provide password'],
        minlength:6,  
    },
})

Userschema.pre('save',async function(next){
    const salt = await bcrupt.genSalt(10);
    this.password = await bcrupt.hash(this.password , salt)
})

module.exports = mongoose.model('User' , Userschema)