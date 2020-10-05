function division(wert1, wert2, callbackFunktion) {
    // Ergebnis der Division ermitteln
    const ergebnis = wert1 / wert2;
  
    // Aufruf der callback Funktion
    callbackFunktion(ergebnis);
}

division(10, 5, (ergebnis) => {
    console.log(ergebnis);
});
