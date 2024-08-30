
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
    taskArr.forEach(taskObj => {
        taskPage.innerHTML += taskObj.taskHTML;
    });

    // Reapply checked status after rendering tasks
    taskArr.forEach((taskObj, index) => {
        let checkbox = document.getElementById(`cbx-${index}`);
        if (checkbox) {
            checkbox.checked = taskObj.isChecked; // Set the checked status
            checkbox.addEventListener('change', () => handleCheckboxChange(index)); // Add event listener
        }
    });
}

function handleCheckboxChange(taskIndex) {
    taskArr[taskIndex].isChecked = !taskArr[taskIndex].isChecked; // Toggle the checked status
    localStorage.setItem("TaskArr", JSON.stringify(taskArr)); // Update local storage
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
                <i id="delNote" class="fa-regular fa-trash-can"></i>
                </div>
        `;
        taskArr.push({ taskHTML, isChecked: false }); // Store task HTML and initial checked status
        localStorage.setItem("TaskArr", JSON.stringify(taskArr)); // Save to local storage
        renderTask(); // Render updated tasks
        inputTask.value = "";
    }
    blurPage.classList.add("hide");
    createTaskPage.classList.add("hide");
};

// Event delegation for deleting a task
taskPage.addEventListener("click", function (event) {
    if (event.target.classList.contains("fa-trash-can")) {
        let taskToDelete = event.target.parentElement;
        let taskIndex = Array.from(taskPage.children).indexOf(taskToDelete);

        // Remove the task from the array
        taskArr.splice(taskIndex, 1);
        localStorage.setItem("TaskArr", JSON.stringify(taskArr)); // Update local storage

        // Remove the task from the DOM
        taskToDelete.remove();
    }
});
