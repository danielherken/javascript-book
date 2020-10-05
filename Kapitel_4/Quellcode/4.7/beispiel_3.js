let result = 'Keine Daten';

try {
    result = JSON.parse('Invalid JSON');
} catch (exception) {
    console.log(exception);
} finally {
    result = 'Keine Daten';
    console.log(result);
}
