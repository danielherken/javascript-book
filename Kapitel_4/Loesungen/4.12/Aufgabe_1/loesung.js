function gerade() {
    let result = 0;

    for (let i = 0; i < 1000000; i++) {
        if (i % 2 === 0) {
            result += i;
        }
    }

    return result;
}

console.log(gerade());
