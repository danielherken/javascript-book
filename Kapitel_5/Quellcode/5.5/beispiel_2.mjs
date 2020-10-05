function Monster(x, y) {
    this.staerke = 10;
    this.lebenspunkte = 100;
    this.positionX = x;
    this.positionY = y;
    this.istAmLeben = function() {
        if (this.lebenspunkte > 0) {
            return true;
        } else {
            return false;
        }        
    }
}

const monster = new Monster(10, 5);

console.log(monster.istAmLeben()); 
