import { Drache } from './drache.mjs';

export class Drachenkind extends Drache {
    constructor(x, y, z) {
        super(x, z, z);
        this.lebenspunkte = 50;
    }
}