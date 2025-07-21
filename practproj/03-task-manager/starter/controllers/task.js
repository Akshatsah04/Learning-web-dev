const Task = require('../models/task')

const getAllTasks = async(req , res)=>{
    try{

        const task =await Task.find({})
        res.status(200).json({tasks: task })
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
const getTasks =async(req , res)=>{
    try{

        const task =await Task.findOne({_id:req.params.id})
        if(!task){
            return res.status(404).json({msg:`No task with id : ${req.params.id}`})
        }
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({msg: err})
    }
    // res.json({
    //     id:req.params.id
    // })
}


const deleteTasks =async(req , res)=>{
    try{
        const {id:taskID}= req.params;
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id : ${req.params.id}`})
        }
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({msg: err})
    }
    
    
    // res.send('deleteTasks')
}

const updateTasks =async(req , res)=>{
    try{
        const {id:taskID}=req.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body , {
            new:true,
            runValidators:true
        })
        res.status(200).json({task})
    }catch(err){ 

    }
    // res.send('updateTasks')
}


module.exports ={
    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks
}