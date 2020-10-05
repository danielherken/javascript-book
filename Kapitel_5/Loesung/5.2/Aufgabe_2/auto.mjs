export class Auto {
    constructor(gewicht, ps, marke) {
        this.gewicht = gewicht;
        this.ps = ps;
        this.marke = marke;
    }

    psProKG() {
        return this.ps / this.gewicht;
    }
}
