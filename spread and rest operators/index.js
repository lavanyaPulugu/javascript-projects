// arrays with spread ... operator
// spread: its expand an array into seperate elements

let fruits = ["apple", "banana", "mango", "coconut"];
let vegitables = ["tomato", "potato", "carrot", "beens"];

let food = [...fruits, ...vegitables, "eggs", "fish"];
console.log(food);

//rest operator: bundles seperate elements into an array

function add(...numbers) {
  let results = 0;
  for (let number of numbers) {
    results += number;
  }
  return results;
}
const total = add(1, 2, 3);

console.log(`the total is $ ${total}`);

function getAvarage(...numbers) {
  let results = 0;
  for (let number of numbers) {
    results += number;
  }
  return results / numbers.length;
}
const avarage = getAvarage(75, 100, 25);

console.log(`the avarage is  ${avarage}`);

function fullName(...subnames) {
  return subnames.join(" ");
}

const getFullName = fullName("Mr.", "rahul", "talluri", "7");

console.log(`student fullname with age is ${getFullName}`);
