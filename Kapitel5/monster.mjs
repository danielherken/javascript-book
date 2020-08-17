export class Monster {
    constructor(x, y) {
        this.staerke = 10;
        this._lebenspunkte = 100;
        this.positionX = x;
        this.positionY = y;
    }

    get lebenspunkte() {
        return this._lebenspunkte;
    }

    set lebenspunkte(value) {
        if (value < 0) {
            this._lebenspunkte = 0;
        } else {
            this._lebenspunkte = value;
        }        
    }

    istAmLeben() {
        if (this.lebenspunkte > 0) {
            return true;
        } else {
            return false;
        }
    }

    static getType() {
        return 'Monster';
    }
}
