async function berechne() {
    let result = 0;

    for (let i = 0; i < 999999999; i++) {
        result += i;
    }

    return result;
}

async function longRunningTask() {
    const promise = berechne();

    console.log('Paraleller Programmcode');

    const result = await promise;

    console.log(result);
}

longRunningTask();
