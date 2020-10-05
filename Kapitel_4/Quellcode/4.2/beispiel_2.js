const neuesSet = new Set([1, 2, 3, 5]);

if (neuesSet.has(2)) {
    console.log('Der Wert 2 ist im Set vorhanden');
}

if (!neuesSet.has(4)) {
    console.log('Der Wert 4 ist nicht im Set vorhanden');
}
