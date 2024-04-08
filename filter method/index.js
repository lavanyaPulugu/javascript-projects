// .filter(): creating a new array by filtering out elements

let numbers = [1, 2, 3, 4, 5, 6, 7];

let evennumbers = numbers.filter(iseven);
console.log(evennumbers);

function iseven(elements) {
  return elements % 2 === 0;
}

let oddnumbers = numbers.filter(isodd);
console.log(oddnumbers);

function isodd(elements) {
  return elements % 2 !== 0;
}

//another example

const fruits = ["aple", "banana", "orange", "kiwi", "guava"];

const shortFruits = fruits.filter(getshortwords);
console.log(shortFruits);

function getshortwords(elements) {
  return elements.length < 6;
}
