const monate = new Map();
monate.set("de", [
    'Januar', 
    'Februar', 
    'März', 
    'April',
    'Mai',
    'Juni',
    'Juli', 
    'August', 
    'September', 
    'Oktober', 
    'November', 
    'Dezember'
]);

monate.set("en", [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
]);

// Beachten Sie das der Array Index mit 0 beginnt
// April ist also der dritte Eintrag im Array
console.log(`Der 4. Monat eines Jahres heißt auf Deutsch 
             ${monate.get('de')[3]}`);

console.log(`Der 4. Monat eines Jahres heißt auf Englisch 
            ${monate.get('en')[3]}`);
