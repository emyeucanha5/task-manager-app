
const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const {createCustomError} = require('../error/custom-error')

const getAllTasks = asyncWrapper(async(req, res) => {
        const tasks = await Task.find({});
        res.status(201).json({ tasks });
})
const getTask = asyncWrapper(async(req,res,next) => {
        const id = req.params.id;
        const task = await Task.findOne({_id: id});

        if (!task) {
            return next(createCustomError(`No task with id : ${req.params.id}`, 404));
        }
        res.status(201).json({ task });
});
const createTask = asyncWrapper(async(req,res,next) => {
        const task = await Task.create(req.body);
        res.status(201).json({ task });  
}       
)
    
const deleteTask = asyncWrapper(async(req,res,next) => {
        const id = req.params.id;
        const task = await Task.findOneAndDelete({_id: id});
        if (!task) {
            return next(createNewCustomAPiError(`No task with id : ${req.params.id}`, 404));
        }
        res.status(201).json({ task });
})

const updateTask = asyncWrapper(async(req,res) => {
        const task = await Task.findOneAndUpdate({_id: req.params.id},{ $set: req.body}, {
            new: true,
            runValidators: true,
        });
        if (!task) {
            return next(createNewCustomAPiError(`No task with id : ${req.params.id}`, 404));
        }
        res.status(201).json({ task });
});
module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    getTask,
    updateTask

}