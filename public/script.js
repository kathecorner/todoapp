const tasksDOM = document.querySelector(".tasks");
const formDOM = document.querySelector(".task-form");
const taskInputDOM = document.querySelector(".task-input");
const formAlertDOM = document.querySelector(".form-alert");


// load tasks from url: /api/v1/tasks
const showTasks = async () => {
    try{
        //call own APIs
        const { data: tasks } = await axios.get("/api/v1/tasks");

        //when there is no tasks
//        console.log(tasks.length);
        if(tasks.length < 1){
            tasksDOM.innerHTML = `<h5 class="empty-list">there is no task.</h5>`
            return;
        }  
        //output tasks
        const allTasks = tasks.map((task) => {
            const { completed, _id, name } = task;
            //console.log(task);

            return `<div class="single-task" ${completed && "task-completed"}">
            <h5>
                <span><i class="far fa-check-circle"></i></span>${name}
            </h5>
            <div class="task-links">
                <a href="edit.html?id=${_id}" class="edit-link">
                <i class="fas fa-edit"></i>
                </a>
            <!-- gabage can-->
                <button type="button" class="delete-button" data-id="${_id}">
                    <i class="fas fa-trash"></i>
                </button>
        </div>
        </div>`;
            
        })
        .join("");
        //console.log(allTasks);
        tasksDOM.innerHTML = allTasks;

    }catch (err){
        console.log(err);
    }
};

showTasks(); //show all tasks

//create a new task
formDOM.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = taskInputDOM.value;

    console.log("aefawef" + name);

    try {
        await axios.post("/api/v1/tasks", { name: name });
        showTasks();
        taskInputDOM.value = "";
        formAlertDOM.style.display = "block";
        formAlertDOM.textContent = "A task has been added.";
        formAlertDOM.classList.add("text-success");
        //taskInputDOM.value ="";
    } catch(err){
        //console.log("here");
        console.log(err.response.data);
        //formAlertDOM.style.display = "none";
        formAlertDOM.classList.remove("text-success");
        formAlertDOM.innerHTML = err.response.data.message;
        //formAlertDOM.innerHTML = "Invalid input.";
    }
    setTimeout(() => {
        formAlertDOM.style.display = "none";
    }, 3000
    );
} );

//delete a task
tasksDOM.addEventListener("click", async(event) => {
    const element = event.target;
    
    //console.log(element.parentElement);

    if (element.parentElement.classList.contains("delete-button")) {
        const id = element.parentElement.dataset.id;
        try {
            await axios.delete(`/api/v1/tasks/${id}`);
            console.log(id);
            showTasks();

        }catch(err){
            console.log(err);
        }
    }
}
)