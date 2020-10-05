import { ToDo } from './todo';

let todos = [
    new ToDo("Bananen kaufen", false),
    new ToDo("Äpfel kaufen", true),
    new ToDo("Kirschen essen", false)
];

function updateToDoListOnScreen() {
    const todoListElement = document.getElementById('todolist');
    
    todoListElement.innerHTML = '';
    
    for (const todo of todos) {
        const toDoListEntry = todo.element();
        todoListElement.appendChild(toDoListEntry);
    }    
}

window.setTimeout(updateToDoListOnScreen, 5000);
