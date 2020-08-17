const namen = ['Felix', 'Daniel', 'Verena', 'Anna'];

function* customIterator() {
    yield namen[1];
    yield namen[0];
    yield namen[3];
    yield namen[2];
}

const iterator = customIterator();

let result = iterator.next();

while (!result.done) {
    console.log(result.value);
    result = iterator.next();
}
