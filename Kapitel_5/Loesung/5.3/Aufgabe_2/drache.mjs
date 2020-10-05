import { Monster } from './monster.mjs';

export class Drache extends Monster {
    constructor(x, y, z) {
      super(x, y);
      this.positionZ = z;
    }

    fliegen(x, y, z) {
        this.positionX = x;
        this.positionY = y;
        this.positionZ = z;
    }
}
