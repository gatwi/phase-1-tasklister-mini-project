document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

// to prevent submit from doing its default behavior in a similar fashion.

const createNewTask = Event => {
  event.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("list");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
}

// Additional input fields
const newTaskForm = document.getElementById("create-task-form");
const newTaskDescription = document.getElementById("new-task-description");
