function berechne() {
    let result = 0;

    for (let i = 0; i < 999999999; i++) {
        result += i;
    }

    return result;
}

const result = berechne();
console.log(result);
