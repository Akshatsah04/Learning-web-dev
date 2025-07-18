const Task = require('../models/task')

const getAllTasks = async(req , res)=>{
    try{

        const task =await Task.find({})
        res.status(201).json({task})
    }catch(err){
        res.status(500).json({msg: err})
    }
    // res.send('all items')
}

const createTasks = async (req , res)=>{
    try{

        const task =await Task.create(req.body)
        res.status(201).json({task})
    }catch(err){
        res.status(500).json({msg: err})
    }
}
const getTasks =(req , res)=>{
    res.json({
        id:req.params.id
    })
}
const updateTasks =(req , res)=>{
    res.send('updateTasks')
}
const deleteTasks =(req , res)=>{
    res.send('deleteTasks')
}

module.exports ={
    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks
}