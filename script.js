//TRADE TO 1MIL TRADE STATISTICS\\

let capital = 1000;
const target = 1000000;

let average = 0.1;
let investment = capital * average + capital;
const arrResults = [capital];

for (let i = investment; i <= 1000000; i = i + i * 0.1) {
  arrResults.push(i);
}

console.log(arrResults.length);
console.log(arrResults);
