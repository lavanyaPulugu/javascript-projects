// reduce(): The reduce() method in JavaScript is used to reduce the elements of an array to a single value.

const prices = [5, 30, 6, 25, 15, 20];
const total = prices.reduce(sum);
console.log(total);

function sum(accumulator, element) {
  return accumulator + element;
}
//example 2

const grades = [20, 50, 35, 60, 70];
const maximum = grades.reduce(getmax);
const minimum = grades.reduce(getmin);

console.log(maximum);

console.log(minimum);

function getmax(accumulator, element) {
  return Math.max(accumulator, element);
}

function getmin(accumulator, element) {
  return Math.min(accumulator, element);
}
