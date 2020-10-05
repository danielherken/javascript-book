let i = 0;

while (true) {
    i += 1;

    if (i > 10 && i < 50) {
        continue;
    }

    console.log(`Die Nummer ist ${i}`);

    if (i === 55) {
        break;
    }
}
