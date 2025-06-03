function addTask(){
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    if (taskInput.value.trim() === "") return;
        
    const li =  document.createElement("li")
    li.innerHTML = `${taskInput.value} <button class="delete-btn" onclick="removeTask(this)">X</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
}
function removeTask(button) {
    button.parentElement.remove();
}