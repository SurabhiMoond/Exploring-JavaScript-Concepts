let numbers = [1, 2, 3, 4, 5, 6];

// Chaining

let res = numbers
  .filter((number) => number % 2 !== 0)
  .map((number) => number * number * number)
  .reduce((acc, curr) => acc + curr);

console.log(res);