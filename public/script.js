// load tasks from url: /api/v1/tasks
const showTasks = async () => {
    try{
        //call own APIs
        const { data: tasks } = await axios.get("/api/v1/tasks");
        console.log(tasks);

    }catch (err){
        console.log(err);
    }
};

showTasks();