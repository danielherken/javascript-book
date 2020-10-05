
Array.prototype.letzterWert = function() {
    return this[this.length - 1];
}

const test = [1, 2, 3, 5];

console.log(test.letzterWert());
