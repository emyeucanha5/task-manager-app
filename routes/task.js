const express = require('express');
const {
    getAllTasks,
    createTask,
    deleteTask,
    getTask,
    updateTask
} = require('../controller/task');
const router = express.Router();



router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').delete(deleteTask).get(getTask).patch(updateTask);

module.exports = router;