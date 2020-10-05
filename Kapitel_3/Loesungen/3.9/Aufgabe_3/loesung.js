function addition(wert1, wert2, callback) {

    callback(wert1);
    callback(wert2);
    callback(wert1 + wert2);
}

addition(10, 5, function (wert) {
    console.log(wert);
});
