let arr = [1, 2, "Ram", true];
let str = "";
arr.forEach((el) => console.log(el));

let arrayOfObjects = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Doe", age: 40 },
];

arrayOfObjects.forEach((el) => {
  console.log("id is: ", el.id);
  console.log("name is: ", el.name);
});



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squareArray = [];

numbers.forEach((number) => {
  let newNumber = number * number * number;
  squareArray.push(newNumber);
});

console.log(squareArray);