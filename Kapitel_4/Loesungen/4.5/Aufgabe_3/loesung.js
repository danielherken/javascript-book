const tage = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
const neujahr = new Date(2024, 0, 1);

const day = neujahr.getDay();

console.log(tage[day]);
