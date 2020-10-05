const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Einen neuen Event Lister für 'uebung' definieren
myEmitter.on('uebung', (details) => {
    console.log(`Das Event wurde ausgelöst: ${details}`);
});

// Auslösen des Events 'uebung'
myEmitter.emit('uebung', '4.9');
myEmitter.emit('uebung', '4.9');
myEmitter.emit('uebung', '4.9');
