const namen = ['Daniel', 'Felix', 'Anna'];

// Element im Array finden
const elementPosition = namen.indexOf('Felix');
console.log(`Das Element an position ${elementPosition} ist ${namen[elementPosition]}`);

if (namen.includes('Felix')) {
    console.log('Der Name Felix ist im Array vorhanden!');
} else {
    console.log('Der Name Felix ist NICHT im Array vorhanden!');
}
