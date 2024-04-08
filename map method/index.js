// Map():In JavaScript, map() is a method of the Array object. It creates a new array by calling a function on every element of the original array and storing the results in a new array. map() returns the new array, and the original array is unchanged.

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);

function square(element) {
  return Math.pow(element, 2);
}

function cube(element) {
  return Math.pow(element, 3);
}

// another example

const students = ["rahul", "richu", "rishi", "ricky"];

const studentupper = students.map(uppercase);
console.log(studentupper);

function uppercase(element) {
  return element.toUpperCase();
}

// another example

const dates = ["2024-1-2", "2024-3-4", "2024-4-8"];

const newdate = dates.map(formadate);

console.log(newdate);

function formadate(element) {
  const parts = element.split("-");

  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
