try {
    const result = JSON.parse('Invalid JSON');
    console.log(result);
} catch (exception) {
    console.log(exception.message);
}
