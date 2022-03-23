<<<<<<< HEAD
const loginBox = document.querySelector("#login");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logout");

const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginBox.classList.add(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    toDoList.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    toDoList.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginBox.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.classList.add(HIDDEN_CLASSNAME);
    toDoForm.classList.add(HIDDEN_CLASSNAME);
    toDoList.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

function onLogout(event) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginBox.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    logoutBtn.classList.add(HIDDEN_CLASSNAME);
    toDoForm.classList.add(HIDDEN_CLASSNAME);
    toDoList.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}

logoutBtn.addEventListener("click", onLogout);


/* todo.js */

const toDoInput = document.querySelector("#todo-form input");

let toDos = [];
const TODOS_KEY = "todos"

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentNode;
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}


function checkToDo(event) {
    const li = event.target.parentNode;
    li.classList.toggle("checked");
}

function paintToDo(newTodo) {
    const checkbox = document.createElement("button");
    checkbox.classList.add("btn-check");
    checkbox.addEventListener("click", checkToDo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.classList.add("btn-delete");
    button.innerText = "x";
    button.addEventListener("click", deleteToDo);
    li.appendChild(checkbox);
    li.appendChild(span);
    toDoList.appendChild(li);
    li.appendChild(button);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}


toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);
    toDos = parsedToDos;
}
=======

>>>>>>> 6432d9ba3b06fffaccfdcbada79ba8da681315a7
