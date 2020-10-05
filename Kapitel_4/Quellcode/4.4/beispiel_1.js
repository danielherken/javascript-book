const regularExpression = /foo/g;
const string = 'table football, foosball';
let array1;

while ((array1 = regularExpression.exec(string)) !== null) {
    console.log(`Found ${array1[0]}`);
}
