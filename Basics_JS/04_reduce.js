let numbers = [1, 2, 3, 4];

let sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

/*
acc = 0, cur = 1 --> 0 + 1 + 1
acc = 1, cur = 2 --> 1 + 2 = 3
acc = 3, cur = 3 --> 3 + 3 = 6
acc = 6, cur = 4 --> 6 + 4 = 10
sum = 10

*/
/******************************************************************* */

let number = [1, 2, 3, 4, 5, 6];

// Chaining

let res = number
  .filter((number) => number % 2 !== 0)
  .map((number) => number * number * number)
  .reduce((acc, curr) => acc + curr);

console.log(res);