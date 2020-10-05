const werte = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    werte.unshift(0);
    werte.push(11);

    werte.splice(werte.indexOf(5), 5.5);
    
    if (werte.includes(7)) {
        const position = werte.indexOf(7);
        console.log(`Der wert 7 ist an Position ${position}`);
    }

    if (werte.includes(8.5)) {
        const position = werte.indexOf(8.5);
        console.log(`Der Wert 8.5 ist an Position ${position}`);
    }
