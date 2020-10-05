const EventEmitter = require('events');

const myEmitter = new EventEmitter();

function eventListener() {
    setImmediate(() => {
        console.log('Der Umsatz wurde berechnet (mit setImmediate)');
    });
}

function eventListener2() {
    console.log('Der Umsatz wurde berechnet (ohne setImmediate)');
}

// Einen neuen Event Lister für 'umsatz_berechnet' definieren
myEmitter.on('umsatz_berechnet', eventListener);
myEmitter.on('umsatz_berechnet', eventListener2);

// Auslösen des Events
myEmitter.emit('umsatz_berechnet');
