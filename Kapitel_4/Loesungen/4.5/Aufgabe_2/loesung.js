const tage = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
const jetzt = new Date();

const day = jetzt.getDay();

console.log(tage[day]);
