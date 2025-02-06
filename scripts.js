const users = [
    { username: "testuser", password: "testpassword" }
];

let loggedIn = false;

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        loggedIn = true;
        document.getElementById("login-form").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        loadCalendar();
    } else {
        alert("Incorrect username or password!");
    }
}

function loadCalendar() {
    const calendarDiv = document.getElementById("calendar");
    const currentDate = new Date();
    calendarDiv.innerHTML = `Current Date: ${currentDate.toDateString()}`;
}

function addTask() {
    const taskInput = document.getElementById("todo-input");
    const task = taskInput.value;

    if (task) {
        const taskList = document.getElementById("todo-list");
        const newTask = document.createElement("li");
        newTask.textContent = task;
        taskList.appendChild(newTask);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
