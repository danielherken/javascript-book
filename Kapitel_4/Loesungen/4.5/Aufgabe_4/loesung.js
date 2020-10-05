const jetzt = new Date();
const jahresende = new Date(jetzt.getFullYear(), 11, 31);

const millisec = jahresende - jetzt;
const sekunden = millisec / 1000;
const minuten = sekunden / 60;
const stunden = minuten / 60;
const tage = Math.floor(stunden / 24);

console.log(tage);
