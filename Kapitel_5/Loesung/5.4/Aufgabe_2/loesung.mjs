const auto = {
    marke: 'VW',
    kw: 100,
    gewicht: 1000,
    ausgeben() {
        console.log(`Das Auto der Marke ${this.marke} hat ein Gewicht von ${this.gewicht} und eine Leistung von ${this.kw}`);
    }
};

auto.ausgeben();
