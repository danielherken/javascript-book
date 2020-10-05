// Definition der Funktion zur Multiplikation
function berechnung(faktor1, faktor2) {
    const ergebnis = faktor1 * faktor2;
    return ergebnis;
}

const faktor1 = 10;
const faktor2 = 5;

// Erste Berechnung ausführen
let ergebnis = berechnung(faktor1, faktor2);

const faktor3 = 7;

// Zweite Berechnung ausführen
ergebnis = berechnung(ergebnis, faktor3);

const faktor4 = 4;

// Dritte Berechnung ausführen
ergebnis = berechnung(ergebnis, faktor4);

// Ergebnis ausführen
console.log(ergebnis);
