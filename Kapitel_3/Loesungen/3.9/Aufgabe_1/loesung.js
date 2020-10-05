function addition(wert1, wert2, callback) {
    callback(wert1 + wert2);
}

function ausgabe(wert) {
    console.log(wert);
}

addition(10, 5, ausgabe);
