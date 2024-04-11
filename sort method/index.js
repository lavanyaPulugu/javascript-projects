// In JavaScript, the sort() method is used to sort the elements of an array in place and returns the sorted array. By default, sort() sorts the elements alphabetically as strings.

let fruits = ["guave", "mango", "banana", "kiwi", "orange", "promoganate"];

let numbers = [5, 2, 8, 3, 4, 6, 9, 1];

fruits.sort();
numbers.sort((a, b) => b - a);

console.log(fruits);

console.log(numbers);

//another example

const people = [
  { name: "lavanya", age: 35, gpa: 5.0 },
  { name: "vasu", age: 40, gpa: 4.0 },
  { name: "rahul", age: 5, gpa: 6.0 },
  { name: "richu", age: 11, gpa: 3.0 },
  { name: "ricky", age: 4, gpa: 1.0 },
];

people.sort((a, b) => b.gpa - a.gpa);
people.sort((a, b) => a.age - b.age);
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);
