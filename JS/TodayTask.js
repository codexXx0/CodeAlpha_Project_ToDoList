
let taskPage = document.getElementById("task")
let theTask = document.getElementById("taskP")
let inputTask = document.getElementById("inputTask")
let addTaskBtn = document.querySelector(".addTaskBtn")
let newTaskBtn = document.getElementById("addTaskPlus");
let blurPage = document.getElementById("blur");
let containerPage = document.getElementById("container");
let addTaskPlus = document.getElementById("addTaskPlus");
let createTaskPage = document.getElementById("addNew");


let taskArr = JSON.parse(localStorage.getItem("TaskArr")) || []; // Load from local storage

document.addEventListener("DOMContentLoaded", renderTask); // Ensure tasks are rendered when the page loads

function renderTask() {
    taskPage.innerHTML = ''; // Clear the task page content first
    taskArr.forEach(taskHTML => {
        taskPage.innerHTML += taskHTML;
    });
}

newTaskBtn.addEventListener("click", function () {
    blurPage.classList.remove("hide");
    createTaskPage.classList.remove("hide");
});


addTaskBtn.onclick = function () {
    if (inputTask.value) {
        let taskId = taskArr.length; // Unique ID based on array length
        let taskHTML = `
            <div class="checkbox-wrapper">
                <input style="display: none;" type="checkbox" id="cbx-${taskId}" class="inp-cbx" />
                <label for="cbx-${taskId}" class="cbx">
                <span>
                    <svg viewBox="0 0 12 9" height="9px" width="12px">
                        <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
                <span id="taskP" class="taskP">${inputTask.value}</span>
                </label>
            </div>
        `;
        taskArr.push(taskHTML);
        localStorage.setItem("TaskArr", JSON.stringify(taskArr)); // Save to local storage
        renderTask(); // Render updated tasks
        inputTask.value = "";
    }
    blurPage.classList.add("hide");
    createTaskPage.classList.add("hide");
};

