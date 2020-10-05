const klassen = new Map();
klassen.set("1A", ["Felix", "Julia", "Patrick"]);
klassen.set("2A", ["Verena", "Anna"]);
klassen.set("3A", ["Manuel", "Daniel", "Markus"]);

for (let [klasse, kinder] of klassen) {
    console.log(`In der Klasse ${klasse} sind die Kinder:`);

    for (let kind of kinder) {
        console.log(kind);
    }
}
