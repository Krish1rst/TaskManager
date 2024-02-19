const Task = require('../models/Tasks')
const asyncWrapper=require('../middleware/async ')
const getAllTasks= async (req,res)=>{
    try{
        const tasks= await Task.find({})
        res.status(200).json({tasks})
        }
        catch(err){
            res.status(500).json({msg:err})
        }
}

const createTask=async (req,res)=>{
    try{
    const task= await Task.create(req.body)
    res.status(201).json({task})
    }
    catch(err){
        res.status(500).json({msg:err})
    }
}
const getTasks=async(req,res)=>{
    try{
        const {id:taskId}=req.params
        const task=await Task.findOne({_id:taskId});
        if(!task){
            res.status(404).json({mas:`No task with id:${taskId}`})
        }
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({msg:err})
    }
}

const deleteTask=async (req,res)=>{
    try{
        const {id:taskId}=req.params;
        const task= await Task.findOneAndDelete({_id:taskId});
        if(!task){
           return res.status(404).json({mas:`No task with id:${taskId}`})
        }
        res.status(200).send({task})
    }
    
    catch(err){
        res.status(500).json({msg:err})
    }
}
const updateTask=async (req,res)=>{
    try{
        const {id:taskId}=req.params;
        const task=await Task.findOneAndUpdate({_id:taskId},req.body,{
            new:true,
            runValidators:true
        })
        if(!task){
            return res.status(404).json({mas:`No task with id:${taskId}`})
         }
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({msg:err,})
    }
}
module.exports={getAllTasks,createTask,getTasks,updateTask,deleteTask }