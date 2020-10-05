const neueMap = new Map([[1,'eins'], [2, 'zwei'], [3, 'drei']]);

for (let [key, value] of neueMap) {
    console.log(`Der Wert für ${key} ist ${value}.`);
}

neueMap.forEach((key, value) => {
    console.log(`Der Wert für ${key} ist ${value}.`);
});
