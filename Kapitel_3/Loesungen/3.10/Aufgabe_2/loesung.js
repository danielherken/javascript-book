function istTeilbar(wert) {
    if ((wert % 2) === 0) {
        console.log(`${wert} ist durch 2 teilbar`);
    }

    if ((wert % 5) === 0) {
        console.log(`${wert} ist durch 5 teilbar!`);
    }
}

istTeilbar(1);
istTeilbar(2);
istTeilbar(3);
istTeilbar(4);
istTeilbar(5);
istTeilbar(6);
istTeilbar(7);
istTeilbar(8);
istTeilbar(9);
istTeilbar(10);
