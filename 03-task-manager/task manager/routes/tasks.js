const express = require('express');
const router = express.Router()
const {getAllTasks,createTask,getTasks,updateTask,deleteTask }=require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTasks).patch(updateTask).delete(deleteTask);
module.exports=router