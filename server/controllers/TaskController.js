const TaskModel = require("../models/TaskModel");

module.exports.list = ((req, res) => {
    TaskModel.find({}).exec()
    .then(tasks=>{
        return res.json(tasks);
    });
});
    
module.exports.show = ((req, res) => {
    TaskModel.findById({"_id": req.params.id}).exec()
    .then(task => {
        res.json(task);
    });
});
    
module.exports.create = ((req, res)=>{
    const newTask = new TaskModel({
        task: req.body.task,
        date: req.body.date
    })
    newTask.save()
    .then(savedTask=>{
        res.json(savedTask);
    });
});