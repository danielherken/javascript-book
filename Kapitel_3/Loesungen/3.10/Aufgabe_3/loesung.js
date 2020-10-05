function ausgeschrieben(wert) {
    switch(wert) {
        case 1:
            return 'eins';
        case 2:
            return 'zwei';
        case 3:
            return 'drei';
        case 4:
            return 'vier';
        case 5:
            return 'fünf';
        default:
            return 'unbekannte Zahl';
    }
}

console.log(ausgeschrieben(1));
console.log(ausgeschrieben(2));
console.log(ausgeschrieben(3));
console.log(ausgeschrieben(4));
console.log(ausgeschrieben(5));
console.log(ausgeschrieben(6));
