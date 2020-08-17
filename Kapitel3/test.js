function division(dividend, divisor) {
    if (divisor === 0) {
        throw new Error("Division durch 0 nicht möglich!")
    }

    return dividend / divisor;
}

try {
    const result = division(10, 0);
    console.log(result);
} catch (e) {
    console.log(e);
}