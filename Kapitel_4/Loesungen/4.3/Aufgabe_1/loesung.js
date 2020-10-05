const namen = ['Felix', 'Daniel', 'Verena', 'Anna'];

function* customIterator() {
    for (let i = namen.length; i >= 0; i--) {
        yield namen[i];
    }
}

const iterator = customIterator();

let result = iterator.next();

while (!result.done) {    
    result = iterator.next();

    if (result.value) {
        console.log(result.value);
    }
}
