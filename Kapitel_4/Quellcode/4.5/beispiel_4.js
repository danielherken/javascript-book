const jetzt = new Date();
const ostern = new Date(2021, 3, 4 ); 

const millisekundenBisOstern = ostern - jetzt;

const tageBisOstern = (((millisekundenBisOstern / 1000) / 60) / 60) / 24;

console.log(`Bis Ostern sind es ${tageBisOstern} Tage`);
