const str = 'Daniel,Felix,Manuel';
const regex = /,/;

const array = str.split(regex);

for (const name of array) {
    console.log(name);
}
