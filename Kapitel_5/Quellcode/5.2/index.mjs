// Importieren der Monster Klasse 
import { Monster } from './monster.mjs';

// Erstellen eines neuen Monster Objekts
// An dieser Stelle wird der Konstruktor in der Monster Klasse 
// aufgerufen
const monster = new Monster(10,20);

// Auf Methoden innerhalb des Objekts kann ebenfalls zugegriffen 
// werden
console.log(monster.istAmLeben());

// Eigenschaften eines Objekts können geändert werden
monster.lebenspunkte = 0;

console.log(monster.istAmLeben());
