const testString = 'Daniel Hallo Felix Hallo Verena';
const regex = /Hallo /g;

const ergebnis = testString.split(regex);

for (const teilstring of ergebnis) {
    console.log(teilstring);
}
