const Task = require('../models/Tasks')

const getAllTasks=(req,res)=>{
    res.send('all items.....here')
}

const createTask=async (req,res)=>{
    const task= await Task.create(req.body)
    res.status(201).json({task})
}
const getTasks=(req,res)=>{
    res.json({id:req.params.id})
}
const updateTask=(req,res)=>{
    res.send('updateTask....here')
}
const deleteTask=(req,res)=>{
    res.send('deleteTask.....here')
}

module.exports={getAllTasks,createTask,getTasks,updateTask,deleteTask }