const monster = {
    staerke: 10,
    lebenspunkte: 100,
    positionX: 0,
    positionY: 0,
    istAmLeben() {
        if (this.lebenspunkte > 0) {
            return true;
        } else {
            return false;
        }
    }
};

console.log(monster);
console.log(monster.istAmLeben());
