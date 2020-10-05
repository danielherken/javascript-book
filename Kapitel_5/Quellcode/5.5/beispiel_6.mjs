function Monster(x, y) {
    this.staerke = 10;
    this.lebenspunkte = 100;
    this.positionX = x;
    this.positionY = y;
}

Monster.prototype.istAmLeben = function() {
    if (this.lebenspunkte > 0) {
        return true;
    } else {
        return false;
    }        
}

function Drache(x, y, z) {
    Monster.call(this, x, y);
    this.positionZ = z;
}

const drache = new Drache(10, 5, 4);

console.log(drache);
