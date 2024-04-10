// Arrays of objects in JavaScript are collections of objects stored within an array. Each object within the array can have its own properties and methods. This data structure is commonly used to represent lists of related items, such as a list of users, products, tasks,

const fruits = [
  { name: "apple", color: "red", calories: 90 },
  { name: "mango", color: "yellow", calories: 80 },
  { name: "orange", color: "orange", calories: 70 },
  { name: "banana", color: "yellow", calories: 50 },
  { name: "kiwi", color: "green", calories: 50 },
];

// fruits.push({ name: "guava", color: "green", calories: 50 });
// fruits.pop();

// fruits.splice(1, 2);

console.log(fruits);

//forEach

fruits.forEach((fruit) => console.log(fruit));
fruits.forEach((fruit) => console.log(fruit.name));

// -------------- map() -------------

const fruitsnames = fruits.map((fruit) => fruit.name);
const fruitscolors = fruits.map((fruit) => fruit.color);

console.log(fruitsnames);
console.log(fruitscolors);

// ------------ filter()--------

const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
const lowCalFruits = fruits.filter((fruit) => fruit.calories < 80);
const highCalFruits = fruits.filter((fruit) => fruit.calories > 80);
console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

// ------------ reduce()-------

const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories < max.calories ? fruit : max
);

console.log(maxFruit);
