const namen = ['Daniel', 'Felix', 'Anna'];

// Exakte Position entfernen
const position = 0;
namen.splice(position, 1);
console.log(`Der erste Name ist: ${namen[0]} `);
console.log(`Der letzte Name ist ${namen[namen.length - 1]}`);
