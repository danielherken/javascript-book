const neuesSet = new Set([1, 2, 3]);
// Drei Elemente im Set
console.log(neuesSet.size); 

// Elemente einem Set hinzufügen
neuesSet.add(10);
neuesSet.add(5);
// Fünf Elemente im Set
console.log(neuesSet.size);

// Aus dem Set löschen
neuesSet.delete(10);
// Vier Elemente im Set
console.log(neuesSet.size);

// Das Set komplett leeren
neuesSet.clear();
// Kein Element im Set
console.log(neuesSet.size);
