
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

    // todos-Array filtern, sodass in offeneToDos alle ToDos
    // enthalten sind, bei welchen erledigt als false markiert ist
    const offeneToDos = todos.filter((o) => !o.erledigt);
    // Element mit der Id 'anzahl' aus dem DOM ermitteln
    const anzahlElement = document.getElementById('anzahl');
    // Die Eigenschaft innerText des Elements mit Hilfe der Länge
    // des offeneToDos-Array korrekt setzen
    anzahlElement.innerText = `${offeneToDos.length} ToDos offen`;
}
