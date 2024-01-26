function addTask() {
    var taskInput = document.getElementById("new-task");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var tasksContainer = document.getElementById("tasks");
        var newTaskItem = document.createElement("li");
        newTaskItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        tasksContainer.appendChild(newTaskItem);
        taskInput.value = "";
    }
    
}

function removeTask(button) {
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}
