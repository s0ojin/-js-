const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");
/* const toDoInput = toDoForm.querySelector("input") */
const toDoClear = document.querySelector(".todo-clear");

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

function onClear() {
    localStorage.removeItem("todos");
    toDoList.remove();
}
toDoClear.addEventListener("click", onClear);