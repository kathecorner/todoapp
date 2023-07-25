const Task = require("../models/Task");

const getAllTasks = (req, res) => {
    res.send("obtained all tasks.");
};

const createTask = async (req, res) => {
    try{
        const createTask = await Task.create(req.body);
        res.status(200).json(Task.createTask);
    } catch (err){
        res.status(500).json(err);

    }
    
};

const getSingleTask = (req, res) => {
    res.send("obtained a task.");
};

const updateTask = (req, res) => {
    res.send("updated a task.");
};

const deleteTask = (req, res) => {
    res.send("deleted a task.");
};

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}