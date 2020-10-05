import { Drache } from './drache.mjs';

const drache = new Drache(0, 0, 0);

console.log(drache);

drache.fliegen(20, 30, 5);

console.log(drache.positionX);
console.log(drache.positionY);
console.log(drache.positionZ);
