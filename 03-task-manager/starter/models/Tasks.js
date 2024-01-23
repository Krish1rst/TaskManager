const moongose= require('mongoose');

const TaskSchema= new moongose.Schema({
    name: String , completed: Boolean
})

module.exports=moongose.model('Task',TaskSchema)