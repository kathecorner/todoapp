const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter Task Name."],
        trim: true,
        maxlength: [20, "Task name has to be less than 21 letters."],
    },
    completed: {
        type: Boolean,
        default: true,
    },
});

module.exports = mongoose.model("Task", TaskSchema);