function Monster(x, y) {
    this.staerke = 10;
    this.lebenspunkte = 100;
    this.positionX = x;
    this.positionY = y;  
}

const monster = new Monster(10, 5);

console.log(monster);
