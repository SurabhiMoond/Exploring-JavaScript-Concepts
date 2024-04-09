let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let booleanResult = numbers.map(number => number % 2 !== 0);
console.log(booleanResult);

let oddArray = numbers.filter(number => number % 2 !== 0);
console.log(oddArray);

let bakwasArray = numbers.filter(number => false);
console.log(bakwasArray);

let s = studentsArray.filter((student) => student.math >= 80 && student.english < 80);
console.log(s);

let studentsArray = [
  { name: "Student 1", math: 85, science: 90, english: 78 },
  { name: "Student 2", math: 92, science: 88, english: 85 },
  { name: "Student 3", math: 78, science: 85, english: 80 },
  { name: "Student 4", math: 80, science: 75, english: 82 },
  { name: "Student 5", math: 88, science: 82, english: 75 },
];