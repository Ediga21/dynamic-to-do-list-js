// Wait for the DOM to fully load before executing any JavaScript
document.addEventListener("DOMContentLoaded", () => {
    // Select key DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input and trim whitespace

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new <li> element and set text
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a "Remove" button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Attach event to remove the task when button is clicked
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append remove button to task item
        li.appendChild(removeBtn);

        // Append the task item to the task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Event listener: Add task on button click
    addButton.addEventListener("click", addTask);

    // Event listener: Add task on "Enter" key press
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});