"use strict";

// tutorial
// https://www.youtube.com/watch?v=Ttf3CEsEwMQ


// variables, selectors
const addTaskInput = document.getElementById("add-task-input");
const searchTasksInput = document.getElementById("search-tasks");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");
const undoTaskButton = $(".undo")[0];
let lastRemovedTask = null;
const caseSensitiveButton = document.getElementById("case-sensitive");
let caseSensitive = true;

// functions
function addTask(event) {
    event.preventDefault();

    const taskName = addTaskInput.value;
    if (taskName === "") {
        //  do something better than alert?
        alert("Please enter a task name.");
        return;
    }

    const newTaskDiv = document.createElement("div");
    newTaskDiv.classList.add("task");

    const newTask = document.createElement("li");
    newTask.innerText = taskName;
    newTask.classList.add("task-item");
    newTaskDiv.appendChild(newTask);

    const removeTaskButton = document.createElement("button");
    removeTaskButton.classList.add("remove-task");
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fas");
    trashIcon.classList.add("fa-trash-alt");
    removeTaskButton.appendChild(trashIcon);
    newTaskDiv.appendChild(removeTaskButton);

    document.getElementById("task-list").appendChild(newTaskDiv);
    addTaskInput.value = "";
};

function alterTask(event) {
    const item = event.target;
    // deleting task
    if (item.classList.contains("remove-task")) {
        $("#modal").toggle("fast");
        lastRemovedTask = $(item).parent()[0];
        lastRemovedTask.remove();
        undoTaskButton.classList.add("undo-active");
    }
    // toggle completeness
    else if (item.classList.contains("task")) {
        const task = item;
        const taskItem = task.querySelector(".task-item");
        taskItem.classList.toggle("task-completed");

        if (taskItem.classList.contains("task-completed")) {
            const date = new Date();
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const hour = date.getHours();
            const minute = date.getMinutes();
            const second = date.getSeconds();

            const dateString = `Finished on ${year}/${month}/${day} at ${hour}:${minute >= 10 ? minute : "0" + minute}:${second >= 10 ? second : "0" + second}`;
            const dateSpan = document.createElement("span");
            dateSpan.classList.add("date-completed");
            dateSpan.innerText = dateString;
            task.insertBefore(dateSpan, task.querySelector(".remove-task"))
            // task.appendChild(dateSpan);
        }
        else {
            task.removeChild(task.querySelector(".date-completed"))
        }
    }
}

function undoTask(event) {
    event.preventDefault();
    const list = $("#task-list")[0];
    list.appendChild(lastRemovedTask);
    undoTaskButton.classList.remove("undo-active");
}

function searchTasks(event) {
    let taskName = searchTasksInput.value;
    const taskItems = document.getElementsByClassName("task-item");
    if (!caseSensitive) {
        taskName = taskName.toUpperCase();
    }
    for (let item of taskItems) {
        let text = item.innerText;
        if (!caseSensitive) {
            text = text.toUpperCase();
        }

        if (text.includes(taskName)) {
            item.parentNode.classList.remove("task-not-found");
        }
        else {
            item.parentNode.classList.add("task-not-found");
        }
    };
}

function toggleCaseSensitive(event) {
    event.preventDefault();
    caseSensitive = !caseSensitive;
    caseSensitiveButton.classList.toggle("case-inactive");
    searchTasks(); // because the search results may change
}

// event listeners
addTaskButton.addEventListener("click", addTask);
taskList.addEventListener("click", alterTask);
undoTaskButton.addEventListener("click", undoTask);
$("#modal").click(event => {
    $("#modal").toggle("fast");
});
searchTasksInput.addEventListener("input", searchTasks);
caseSensitiveButton.addEventListener("click", toggleCaseSensitive);