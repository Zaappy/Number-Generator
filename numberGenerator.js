const goalNumber = 415; //The number that will attempt to be generated. 0 through 1000 only.

let rando;
let loopCount = 0;
let loopEnglish;

do {
    rando = Math.random() * 1001;
    rando = Math.floor(rando);
    loopCount++;
    console.log(rando);
} while (rando !== goalNumber);
if (loopCount === 1) {
    loopEnglish = 'attempt';
} else {
    loopEnglish = 'attempts';
}
console.log(`${goalNumber} took ${loopCount} ${loopEnglish} to generate.`);
