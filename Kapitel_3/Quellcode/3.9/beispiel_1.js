function division(wert1, wert2, callbackFunktion) {
    // Ergebnis der Division ermitteln
    const ergebnis = wert1 / wert2;
  
    // Aufruf der Callback-Funktion
    callbackFunktion(ergebnis);
}

// Definition der Callback-Funktion
function ergebnisAnzeige(ergebnis) {
    console.log(ergebnis);
}

// Aufruf der Division
division(10, 5, ergebnisAnzeige); // Ausgabe: 2
