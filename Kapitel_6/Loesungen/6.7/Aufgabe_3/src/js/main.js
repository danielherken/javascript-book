import { ToDo } from './todo';

let todos = [];

window.addEventListener('load', (event) => {
    updateToDoListOnScreen();

    const neuesToDoElement = document.getElementById('neuesToDo');
    neuesToDoElement.addEventListener('keydown', (event) => {
        if (event.which == 13 || event.keyCode == 13) {
            const todo = new ToDo(neuesToDoElement.value, false);
            todos.push(todo);

            todo.addEventListener('loeschen', (o) => {
                const index = todos.indexOf(o.target);
                todos.splice(index, 1);
                updateToDoListOnScreen();
            });

            document.getElementById('aufraeumen')
                .addEventListener('click', (event) => {
                    todos = todos.filter((o) => !o.erledigt);
                    updateToDoListOnScreen();
            });

            updateToDoListOnScreen();
        }    
    });
});

function updateToDoListOnScreen() {
    const todoListElement = document.getElementById('todolist');

    todoListElement.innerHTML = '';
    
    for (const todo of todos.sort((a, b) => { 
         return a.titel.localeCompare(b.titel) 
    })) {
        const toDoListEntry = todo.element();
        todoListElement.appendChild(toDoListEntry);
    }

    const anzahlOffenerToDos = 
          todos.filter((o) => !o.erledigt).length;
    document.getElementById('anzahl').innerText = 
          `${anzahlOffenerToDos} ToDos offen`;
}
