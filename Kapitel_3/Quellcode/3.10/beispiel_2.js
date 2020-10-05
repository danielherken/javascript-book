function begruessung(zeitpunkt) {

    switch (zeitpunkt) {
        case 'Morgen':
        case 'Vormittag':
            return 'Guten Morgen!';
        case 'Mittag':
            return 'Guten Appetit!';
        case 'Abend':
            return 'Guten Abend!';
        default:
            return 'Hallo!';
    }
}

console.log(begruessung('Vormittag')); // Ausgabe: Guten Morgen!
