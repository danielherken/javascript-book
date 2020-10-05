const wert1 = 1;
const wert2 = '1';
const wert3 = 1;

// Dies ist true, obwohl wert2 ein String ist
console.log(wert1 == wert2);

// Dies ist false, da unterschiedliche Typen verglichen werden
console.log(wert1 === wert2);

// Dies ist true, da gleiche Typen und Werte vorhanden
console.log(wert1 === wert3);
console.log(wert1 == wert3);
