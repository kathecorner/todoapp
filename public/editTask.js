const taskIdDOM = document.querySelector(".task-edit-id");
const taskNameDOM = document.querySelector(".task-edit-name");
const taskCompletedDOM = document.querySelector(".task-edit-completed");
const editFormDOM = document.querySelector(".single-task-form");
const formAlertDOM = document.querySelector(".form-alert");

const params = window.location.search;
const id = new URLSearchParams(params).get("id");

console.log(id);
//get specific a task
const showTask = async () => {
    try {
        var { data: task } = await axios.get(`/api/v1/tasks/${id}`);
        console.log({ data: task });
        var { _id, completed, name } = task;

        taskIdDOM.textContent = _id;
        taskNameDOM.value = name;
        //if (completed) {
            taskCompletedDOM.checked = completed;
        //}

    }catch (err) {
        console.log(err);
    }
};

showTask();

//edit task
editFormDOM.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const taskName = taskNameDOM.value;
        taskCompleted = taskCompletedDOM.checked;
        const { data: task } = await axios.patch(`/api/v1/tasks/${id}`, {
            name: taskName,
            completed: taskCompleted

        });
        formAlertDOM.getElementsByClassName.display = "block";
        formAlertDOM.textContent = "Edit Successful.";
        formAlertDOM.classList.add("text-success");

    }catch (err){
        console.log(err);
    }
    setTimeout(() => {
        formAlertDOM.style.display = "none";
    }, 3000

    );
}
)