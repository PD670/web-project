// // Select elements
// const taskInput = document.getElementById('task-input');
// const priorityInput = document.getElementById('priority-input');
// const dueDateInput = document.getElementById('due-date-input');
// const taskList = document.getElementById('task-list');
//
// // Load tasks from localStorage
// let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// displayTasks(tasks);
//
// function addTask() {
//     const task = taskInput.value.trim();
//     const priority = priorityInput.value;
//     const dueDate = dueDateInput.value;
//
//     if (!task) return alert('Please enter a task.');
//
//     const newTask = {
//         id: Date.now(),
//         task,
//         priority,
//         dueDate,
//         completed: false,
//     };
//
//     tasks.push(newTask);
//     saveAndRender();
// }
//
// function saveAndRender() {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     displayTasks(tasks);
// }
//
// function displayTasks(tasksToDisplay) {
//     taskList.innerHTML = '';
//     tasksToDisplay.forEach(task => {
//         const taskElement = document.createElement('li');
//         taskElement.classList.add('task-item', task.priority.toLowerCase());
//         taskElement.innerHTML = `
//       <span>${task.task} - Due: ${task.dueDate || 'No date'}</span>
//       <div class="task-actions">
//         <button onclick="toggleComplete(${task.id})">${task.completed ? 'Undo' : 'Complete'}</button>
//         <button onclick="editTask(${task.id})">Edit</button>
//         <button onclick="deleteTask(${task.id})">Delete</button>
//       </div>
//     `;
//         taskList.appendChild(taskElement);
//     });
// }
//
// function deleteTask(id) {
//     tasks = tasks.filter(task => task.id !== id);
//     saveAndRender();
// }
//
// function toggleComplete(id) {
//     const task = tasks.find(task => task.id === id);
//     task.completed = !task.completed;
//     saveAndRender();
// }
//
// function editTask(id) {
//     const task = tasks.find(task => task.id === id);
//     taskInput.value = task.task;
//     priorityInput.value = task.priority;
//     dueDateInput.value = task.dueDate;
//     deleteTask(id);  // Remove old task after editing
// }
//
// function filterTasks() {
//     const filterPriority = document.getElementById('filter-priority').value;
//     const filterDate = document.getElementById('filter-date').value;
//
//     const filteredTasks = tasks.filter(task => {
//         const matchesPriority = filterPriority === 'All' || task.priority === filterPriority;
//         const matchesDate = !filterDate || task.dueDate === filterDate;
//         return matchesPriority && matchesDate;
//     });
//
//     displayTasks(filteredTasks);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Select elements
const taskInput = document.getElementById('task-input');
const priorityInput = document.getElementById('priority-input');
const dueDateInput = document.getElementById('due-date-input');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let editMode = null;
displayTasks(tasks);

function addTask() {
    const task = taskInput.value.trim();
    const priority = priorityInput.value;
    const dueDate = dueDateInput.value;

    if (!task) return alert('Please enter a task.');

    if (editMode !== null) {
        tasks = tasks.map(t =>
            t.id === editMode ? { ...t, task, priority, dueDate } : t
        );
        editMode = null;
    } else {
        const newTask = {
            id: Date.now(),
            task,
            priority,
            dueDate,
            completed: false,
        };
        tasks.push(newTask);
    }

    taskInput.value = '';
    priorityInput.value = 'Low';
    dueDateInput.value = '';
    saveAndRender();
}

function saveAndRender() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks(tasks);
}

function displayTasks(tasksToDisplay) {
    taskList.innerHTML = '';
    tasksToDisplay.forEach(task => {
        const taskElement = document.createElement('li');

        taskElement.classList.add(
            'task-item', 'p-4', 'rounded', 'shadow-sm',
            'flex', 'justify-between', 'items-center',
            'animate__animated', 'animate__fadeIn'
        );

        const priorityClass = task.priority.toLowerCase() === 'high'
            ? 'border-l-4 border-red-600 bg-red-100'
            : task.priority.toLowerCase() === 'medium'
                ? 'border-l-4 border-yellow-500 bg-yellow-100'
                : 'border-l-4 border-green-500 bg-green-100';

        priorityClass.split(' ').forEach(cls => taskElement.classList.add(cls));

        taskElement.innerHTML = `
      <span class="${task.completed ? 'line-through text-gray-400' : ''}">${task.task} - Due: ${task.dueDate || 'No date'}</span>
      <div class="task-actions flex space-x-2">
        <button onclick="toggleComplete(${task.id})" class="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700">${task.completed ? 'Undo' : 'Complete'}</button>
        <button onclick="editTask(${task.id})" class="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</button>
        <button onclick="deleteTask(${task.id})" class="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
      </div>
    `;
        taskList.appendChild(taskElement);
    });
}

// Delete a task with animation
function deleteTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    const taskElement = document.querySelector(`.task-item:nth-child(${taskIndex + 1})`);

    if (taskElement) {
        // Add fade-out class dynamically to trigger animation
        taskElement.classList.add('animate__fadeOut');

        setTimeout(() => {
            tasks = tasks.filter(task => task.id !== id);
            saveAndRender();
        }, 500);  // Delay to allow fade-out animation to complete
    }
}

function toggleComplete(id) {
    const task = tasks.find(task => task.id === id);
    task.completed = !task.completed;
    saveAndRender();
}

function editTask(id) {
    const task = tasks.find(task => task.id === id);

    taskInput.value = task.task;
    priorityInput.value = task.priority;
    dueDateInput.value = task.dueDate;

    editMode = id;
}

function filterTasks() {
    const filterPriority = document.getElementById('filter-priority').value;
    const filterDate = document.getElementById('filter-date').value;

    const filteredTasks = tasks.filter(task => {
        const matchesPriority = filterPriority === 'All' || task.priority === filterPriority;
        const matchesDate = !filterDate || task.dueDate === filterDate;
        return matchesPriority && matchesDate;
    });

    displayTasks(filteredTasks);
}
