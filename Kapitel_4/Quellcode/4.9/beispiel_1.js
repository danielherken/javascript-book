const EventEmitter = require('events');

const myEmitter = new EventEmitter();

function eventListener(umsatz) {
    console.log('Der Umsatz wurde berechnet:');
    console.log(`${umsatz}€`);
}

// Einen neuen Event Lister für 'umsatz_berechnet' definieren
myEmitter.on('umsatz_berechnet', eventListener);

// Auslösen des Events
const umsatz = 143004;
myEmitter.emit('umsatz_berechnet', umsatz);
