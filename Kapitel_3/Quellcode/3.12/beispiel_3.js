const namen = ['Daniel', 'Felix', 'Anna'];

// Am Ende des Arrays ein Element hinzufügen
namen.push('Verena');
console.log(`Der erste Name ist: ${namen[0]} `);
console.log(`Der letzte Name ist ${namen[namen.length - 1]}`);

// Vom Ende des Arrays ein Element entfernen
namen.pop();
console.log(`Der erste Name ist: ${namen[0]} `);
console.log(`Der letzte Name ist ${namen[namen.length - 1]}`);

// Am Anfang des Arrays ein Element hinzufügen
namen.unshift('Manuel');
console.log(`Der erste Name ist: ${namen[0]} `);
console.log(`Der letzte Name ist ${namen[namen.length - 1]}`);

// Das Element am Anfang des Arrays entfernen
namen.shift();
console.log(`Der erste Name ist: ${namen[0]} `);
console.log(`Der letzte Name ist ${namen[namen.length - 1]}`);
