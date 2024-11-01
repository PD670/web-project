// Select elements
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

let tasks = [];
let editMode = null;

// Add a new task or update an existing task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') return alert("Please enter a task.");

    if (editMode !== null) {
        // Update the existing task
        tasks = tasks.map(task =>
            task.id === editMode ? { ...task, text: taskText } : task
        );
        editMode = null;  // Reset edit mode
    } else {
        // Create a new task
        const newTask = {
            id: Date.now(),
            text: taskText
        };
        tasks.push(newTask);
    }

    taskInput.value = '';  // Clear input field
    renderTasks();
}

// Render tasks in the task list
function renderTasks() {
    taskList.innerHTML = '';  // Clear previous tasks

    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('flex', 'justify-between', 'items-center', 'bg-gray-200', 'p-2', 'rounded');

        // Task text
        taskItem.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button onclick="editTask(${task.id})" class="text-yellow-500 hover:text-yellow-600 mr-2">Edit</button>
        <button onclick="deleteTask(${task.id})" class="text-red-500 hover:text-red-600">Delete</button>
      </div>
    `;

        taskList.appendChild(taskItem);
    });
}

// Delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

// Edit a task
function editTask(id) {
    const task = tasks.find(task => task.id === id);
    taskInput.value = task.text;
    editMode = id;
}
