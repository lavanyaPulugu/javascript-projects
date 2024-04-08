// Arrow functions, introduced in ECMAScript 6 (ES6), provide a concise syntax for writing functions in JavaScript.

// normal function
const hello = function () {
  console.log("hello");
};

hello();

//arrow function

const bolo = (name, age) => {
  console.log(`hello ${name}`), console.log(`i am ${age} years old`);
};

bolo("lavanya", 26);

//another example using callback

setTimeout(() => console.log("hello"), 3000);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((elements) => Math.pow(elements, 2));
console.log(squares);
const cubes = numbers.map((elements) => Math.pow(elements, 3));
console.log(cubes);

const evennumbers = numbers.filter((elements) => elements % 2 === 0);
console.log(evennumbers);
const oddnumbers = numbers.filter((elements) => elements % 2 !== 0);
console.log(oddnumbers);

const total = numbers.reduce((accumulator, elements) => accumulator + elements);
console.log(total);
