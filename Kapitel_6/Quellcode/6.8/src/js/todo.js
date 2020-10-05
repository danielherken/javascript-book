export class ToDo extends EventTarget {
    constructor(titel, erledigt) {
        super();
        this.titel = titel;
        this.erledigt = erledigt;
    }

    element() {
        const listElement = document.createElement('li');
        const divElement = document.createElement('div');        
        const checkboxElement = document.createElement('input');
        const spanElement = document.createElement('span');
        const buttonElement = document.createElement('button');

        listElement.appendChild(divElement);

        divElement.appendChild(checkboxElement);
        divElement.appendChild(spanElement);
        divElement.appendChild(buttonElement);
        
        checkboxElement.setAttribute('type', 'checkbox');
        checkboxElement.className = "erledigt";

        buttonElement.className = "loeschen";

        spanElement.innerText = this.titel;
        buttonElement.innerText = "X";

        if (this.erledigt) {
            checkboxElement.setAttribute('checked', 'checked');
            divElement.className = "erledigt";
        }

        buttonElement.addEventListener('click', () => {
            this.dispatchEvent(new Event('loeschen'));
        });
        
        // Wir erstellen einen EventListener für das "change"-Event 
        // der Checkbox. Dies wird immer ausgelöst, wenn die Checkbox
        // aktiviert oder deaktiviert wird.
        checkboxElement.addEventListener('change', () => {
            // Nun setzen wir die erledigt-Eigenschaft des ToDos
            // entsprechend dem Status der Checkbox
            this.erledigt = checkboxElement.checked;
     
            // Und natürlich muss auch die Klasse des DIV-Elements
            // entsprechend aktualisiert werden
            divElement.className = this.erledigt ? "erledigt" : "";
        });
            
        return listElement;        
    }
}
