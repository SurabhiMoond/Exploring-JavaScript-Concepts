let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squareArray = [];

numbers.map((number) => {
  let newNumber = number * number * number;
  squareArray.push(newNumber);
});

// console.log(squareArray);

let mapResult = numbers.map((number) => {
  let newNumber = number * number * number;
  return newNumber;
});

console.log("Map result: ", mapResult);

let res = numbers.map((number) => {
  return number + "";
});

console.log(res);

let studentsArray = [
  { name: "Student 1", math: 85, science: 90, english: 78 },
  { name: "Student 2", math: 92, science: 88, english: 85 },
  { name: "Student 3", math: 78, science: 85, english: 80 },
  { name: "Student 4", math: 80, science: 75, english: 82 },
  { name: "Student 5", math: 88, science: 82, english: 75 },
  { name: "Student 6", math: 90, science: 78, english: 88 },
  { name: "Student 7", math: 85, science: 90, english: 78 },
  { name: "Student 8", math: 92, science: 88, english: 85 },
  { name: "Student 9", math: 78, science: 85, english: 80 },
  { name: "Student 10", math: 80, science: 75, english: 82 },
  { name: "Student 11", math: 88, science: 82, english: 75 },
  { name: "Student 12", math: 90, science: 78, english: 88 },
  { name: "Student 13", math: 85, science: 90, english: 78 },
  { name: "Student 14", math: 92, science: 88, english: 85 },
  { name: "Student 15", math: 78, science: 85, english: 80 },
  { name: "Student 16", math: 80, science: 75, english: 82 },
  { name: "Student 17", math: 88, science: 82, english: 75 },
  { name: "Student 18", math: 90, science: 78, english: 88 },
  { name: "Student 19", math: 85, science: 90, english: 78 },
  { name: "Student 20", math: 92, science: 88, english: 85 },
];

console.table(studentsArray);

let newStudentArray = studentsArray.map((student) => ({...student, total: student.math + student.science + student.english}));

console.table(newStudentArray);
console.table(studentsArray);