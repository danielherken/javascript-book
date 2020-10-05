import { ToDo } from './todo';

let todos = [
    new ToDo("Bananen kaufen", false),
    new ToDo("Äpfel kaufen", true),
    new ToDo("Kirschen essen", false)
];

function updateToDoListOnScreen() {
    const todoListElement = document.getElementById('todolist');
    
    todoListElement.innerHTML = '';
    
    for (const todo of todos.sortcompareToDos) {
        const toDoListEntry = todo.element();
        todoListElement.appendChild(toDoListEntry);
    }   
}

function compareTodos(todoA, todoB) {
  return todoA.titel.localCompare(todoB.titel);
}

window.setTimeout(updateToDoListOnScreen, 5000);
