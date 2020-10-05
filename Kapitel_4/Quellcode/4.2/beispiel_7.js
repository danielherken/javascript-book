const neueMap = new Map([[1,'eins'], [2, 'zwei'], [3, 'drei']]);

// Schleife nur über die keys
for (let key of neueMap.keys()) {
    console.log(key);
}

// Schleife nur über die values
for (let value of neueMap.values()) {
    console.log(value);
}
