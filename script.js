function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") return;

    const task = document.createElement("li");
    task.classList.add("task");
    task.innerHTML = `
        <span>${taskInput.value}</span>
        <div>
            <button onclick="toggleTask(this)">Complete</button>
            <button onclick="removeTask(this)">Delete</button>
        </div>
    `;
    taskList.appendChild(task);
    taskInput.value = "";
}

function toggleTask(button) {
    const task = button.parentElement.parentElement;
    task.classList.toggle("complete");

    if (task.classList.contains("complete")) {
        button.textContent = "Undo";
    } else {
        button.textContent = "Complete";
    }
}

function removeTask(button) {
    const task = button.parentElement.parentElement;
    task.remove();
}
