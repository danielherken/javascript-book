const namen = ['Felix', 'Daniel', 'Verena', 'Anna'];

function getRandomInteger(maximum) {
    return Math.floor(Math.random() * Math.floor(maximum));
}

function* customIterator() {
    for (let i = 0; i < 4; i++) {
        yield namen[getRandomInteger(namen.length)];
    }
}

const iterator = customIterator();

let result = iterator.next();

while (!result.done) {
    console.log(result.value);
    result = iterator.next();
}
