function count() {
    let result = 0;
    for (let i = 0; i <= 1000000; i++) {
        result += i;
    }

    return result;
}

console.log(count());
