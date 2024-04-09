// What is destructuring in JavaScript and how is it used?

let arr = [1, 2, 3, 4, 5];
let [one, two, three] = arr;
console.log(three); //3

let obj = {
  name: "surabhi",
  code: 2,
};
let { name, code } = obj;
console.log(code); //2

// What is the difference between forEach, map, and filter methods in JavaScript?

let data = arr.forEach((ele) => {
  // The forEach method iterates over each element in an array and executes a callback function for each element.
  // It does not return a new array.
  console.log(ele);
});

// The map method iterates over each element in an array, applies a callback function to each element, & returns a new array containing the        results of the callback function.
let data1 = arr.map((ele) => {
  return ele * 2;
});
console.log("map :", data1);
//[2,4,6...]

// The filter method iterates over each element in an array, applies a callback function to each element, & returns a new array containing only the elements for which the callback function returns true.
let data3 = arr.filter((ele) => {
  return ele % 3 === 0;
});
//3
console.log("filter :", data3);
