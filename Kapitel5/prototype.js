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

Drache.prototype = Object.create(Monster.prototype);

Drache.prototype.istAmLeben = function() {
    return true;
}

function Nessy(x, y, z) {
    Monster.call(this, x, y);
    this.positionZ = z;
}

Nessy.prototype = Object.create(Nessy.prototype);

Nessy.prototype.schwimmen = function() {
    this.positionX += 10;
    this.positionY += 10;
    this.positionZ += 10;
}

Nessy.prototype.istAmLeben = function() {
    return false;
}

const nessy = new Nessy(10, 5, 4);

nessy.schwimmen();

console.log(nessy);
