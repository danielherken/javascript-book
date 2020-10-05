import { Auto } from './auto.mjs';

const auto = new Auto(1000, 100, 'Golf');

console.log(auto.gewicht);
console.log(auto.ps);
console.log(auto.marke);
console.log(auto.psProKG());
