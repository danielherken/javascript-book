const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Einen neuen Event Lister für 'uebung' definieren
myEmitter.on('uebung', () => {
    console.log('Das Event wurde ausgelöst');
});

// Auslösen des Events 'uebung'
myEmitter.emit('uebung');
