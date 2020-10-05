const jetzt = new Date();
const ostern = new Date(2020, 3, 12);

if (jetzt < ostern) {
    console.log('Ostern steht dieses Jahr noch bevor')
} else if (jetzt == ostern) {
    console.log('Ostern ist heute')
} else {
    console.log('Ostern war dieses Jahr bereits')
}
