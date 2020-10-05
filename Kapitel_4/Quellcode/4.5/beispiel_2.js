const jetzt = new Date();
console.log(jetzt);

const offset = jetzt.getTimezoneOffset();
console.log(offset);

jetzt.setMinutes(jetzt.getMinutes() - offset);
console.log(jetzt);
