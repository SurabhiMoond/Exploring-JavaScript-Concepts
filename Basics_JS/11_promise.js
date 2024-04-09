// Promise

// let promise = new Promise();

// DRY

let person1 = {
  name: "IP",
  age: 27,
  married: false,
  gender: "male",
  profession: "Software Engineer",
  hobby: "Playing Cricket",
};

console.log(person1);

let person2 = {
  name: "Surabhi",
  age: 26,
  married: false,
  gender: "female",
  profession: "Aspiring Software Engineer",
  hobby: "Art & Craft",
};

console.log(person2);

function createPerson(name, age, married, gender, profession, hobby) {
  let obj = {};
   // Assigning properties to the object
  obj.name = name;
  obj.age = age;
  obj.married = married;
  obj.gender = gender;
  obj.profession = profession;
  obj.hobby = hobby;

  return obj;
}

let p1 = createPerson(
  "IP",
  27,
  false,
  "male",
  "Software Engineer",
  "Playing Cricket"
);

console.log("p1", p1);

// Constructor function
function Person(name, age, married, gender, profession, hobby) {
  // let this = {};
 // 'this' refers to the newly created object
  console.log("Before Initialization: ", this);
  this.name = name;
  this.age = age;
  this.married = married;
  this.gender = gender;
  this.profession = profession;
  this.hobby = hobby;
  console.log("Aftre Initialization: ", this);

  // return this;
}

let p3 = new Person(
  "IP",
  27,
  false,
  "male",
  "Software Engineer",
  "Playing Cricket"
);

console.log(p3);

/**********************************************************************************/
// Promise
// Creating a new Promise
let promise = new Promise(function (resolve, reject) {
  // Producer code
  setTimeout(function () {
    let data_mila = false;

    if (data_mila) {  // If data is available, resolve the promise
      resolve({ name: "IP", age: 27 });
    } else { 
      reject(Error("Internal server error"));
    }
  }, 5000); // Simulating a delay of 5 seconds
});

console.log(promise);

// Consuming a promise
// then...catch...finally

promise
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message))
  .finally(() => console.log("Promise is settled"));

/*          passing callback(executor)
developer ----------------------------------> Promise 

           passing callback(resolve, reject)
Promise ----------------------------------------> executor


Promise has two internal properties:
PromiseState, PromiseResult

Initially
PromiseState --> "pending"
PromiseResult --> undefined



Later i.e., when the promise is settled
agar resolve call hui
PromiseState --> "fulfilled"
PromiseResult --> "---"

Or
agar reject call hui
PromiseState --> "rejected"
PromiseResult --> "---"


*/
