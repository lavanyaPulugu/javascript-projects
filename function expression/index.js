// function expression:A function expression in JavaScript is a way of defining a function by assigning it to a variable.
//function as a value
const hello = function () {
  console.log("hello");
};

//function as an argument
setTimeout(function () {
  console.log("bolo");
}, 3000);

const numbers = [1, 2, 3, 4, 5, 6];
const sqares = numbers.map(function (element) {
  return Math.pow(element, 3);
});
console.log(sqares);

// function sqare(element) {
//   return Math.pow(element, 2);

// }

const evennumber = numbers.filter(function (element) {
  return element % 2 === 0;
});

console.log(evennumber);

const oddnumbers = numbers.filter(function (elements) {
  return elements % 2 !== 0;
});
console.log(oddnumbers);

const total = numbers.reduce(function (accumulator, element) {
  return accumulator + element;
});

console.log(total);
