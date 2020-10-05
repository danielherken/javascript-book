function multiplizieren(...faktoren) {
    let result = 1;

    for (let faktor of faktoren) {
        result = result * faktor;
    }

    return result;
}

console.log(multiplizieren(10, 20, 5, 7)); // Ausgabe: 7000
console.log(multiplizieren(2, 3, 2));// Ausgabe: 12
