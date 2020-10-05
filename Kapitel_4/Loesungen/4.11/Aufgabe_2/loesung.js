function count() {
    return new Promise((resolve, reject) => {
        let result = 0;
        for (let i = 0; i <= 1000000; i++) {
            result += i;
        }
       
        resolve(result);
    });
}

count().then((result) => {
    console.log(result);
});
