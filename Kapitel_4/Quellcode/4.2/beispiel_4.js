const neueMap = new Map([[1,'eins'], [2, 'zwei']]);
console.log(neueMap.size);

// Zur Map hinzufügen
neueMap.set(3, 'drei');
neueMap.set(4, 'vier');
// Neue Größe der Map ist 4
console.log(neueMap.size);

// Value für den Key 3 ausgeben, 'drei'
console.log(neueMap.get(3));

// Wertepaar für key 4 löschen
neueMap.delete(3);
console.log(neueMap.size);

// Alle Wertepaare löschen
neueMap.clear();
console.log(neueMap.size);
