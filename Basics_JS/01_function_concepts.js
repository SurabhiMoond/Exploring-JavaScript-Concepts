// function declaration
function sayHello(name) {
  // parameters --> placeholders
  console.log(`Hello ${name}`);
  return 2;
  console.log("Oye!");
}

let x = sayHello("Surabhi"); // argument // 8 --> 3 --> 4 --> 8  // Calling a function/invoking a function/running a function
console.log(x);

// function jahape call hota hai whi pe value return karta hai
// Agar function explicitly kuch return nehi kar raha hai iska matlab wo undefined return kar raha hai
// any code written after return statement is unreachable code and will never be executed

// function expressions
let sayHi = function () {
  console.log("Hi");
};

sayHi();

// IIFE --> Immediately Invoked Function Expression
(function () {
  console.log("Hi");
})();

// Arrow function
let sayHi1 = () => {
  console.log("Hi");
};

let y1 = (p1, p2, p3) => {
  let sum = p1 + p2 + p3;
  return sum;
};

/*
  
  If function body has only one line then we can omit {} and also the return keyword.
  If there is only one parameter then we can omit (). If there is no parameter or there is more than one parameter then we must write ()
  
  */

let y2 = (p1, p2, p3) => {
  return p1 + p2 + p3;
};

let y3 = (p1, p2, p3) => p1 + p2 + p3;

let y4 = (p1, p2, p3) => {
  console.log(p1 + p2 + p3);
};

let y5 = (p1, p2, p3) => console.log(p1 + p2 + p3);

let y6 = (p1) => {
  return p1;
};

let y7 = (p1) => p1;

/****************************************************************************************** */

// Callback function & Higher Order functions
function haveBreakfast(name, food, time, fn) {
  // Higher order function
  console.log(
    `Hey! I am ${name}. Tomorrow I will have ${food} as my breakfast at ${time} a.m.`
  );
  fn();
}

haveBreakfast("Surabhi", "Maggi", 9, rest); // passing function reference // callback function // 7 ---> 2 --> 3 ---> 4 ---> 9 ---> 10 ---> 4

haveBreakfast("IP", "Bread", 11, study);

haveBreakfast("Indrani", "Biscuit and Kurkure", 11, function () {
  console.log("I will attend the scrum");
});

haveBreakfast("Amit", "Rooti", 7, () => {
  console.log("I will go to my firm");
});

haveBreakfast("surbi", "coffee", 8, () => {
  console.log("I will go to my office");
});
haveBreakfast("sia", "chai", 5, work);
function rest() {
  console.log("I will take rest for 30 minutes");
}

function study() {
  console.log("I will study for 45 minutes");
}

function work() {
  console.log("I will do my work");
}

let arr = ["Hablu", "Gablu"];

arr.forEach(function (p1, p2, p3, p4) {
  console.log("p1: ", p1);
  console.log("p2: ", p2);
  console.log("p3: ", p3);
  console.log("p4: ", p4);

  console.log("====================");
});

/*
  p1:  Hablu
  p2:  0
  p3:  [ 'Hablu', 'Gablu' ]
  p4:  undefined
  ====================     
  p1:  Gablu
  p2:  1
  p3:  [ 'Hablu', 'Gablu' ]
  p4:  undefined
  ==================== 
  
  */

arr.forEach(function (el, i) {
  console.log("Index: ", i, "Element: ", el);
});

/**************************************************************************************************************** */
const data = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Alice", age: 25 },
  { id: 3, name: "Bob", age: 35 },
];

console.table(data);

console.warn("Hey! it is warning!");
console.error("Hey! it is error!");

/*************************************************************************************************************/

console.log("Start");

const id1 = setTimeout(function () {
  console.log("called After 5 seconds");
}, 5000);

const id = setInterval(function () {
  console.log("calling after 2 seconds");
}, 2000);

document.getElementById("btn").addEventListener("click", function (event) {
  clearInterval(id);
  clearTimeout(id1);
});

console.log("End");

const tymSet = setInterval(() => {
  console.log("called After 5 seconds");
}, 5000);
