// forEach:  this method used to iterate over the elements of an array and apply a specified function(callback) to each element

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);

function display(hmmm) {
  console.log(hmmm);
}

// diff b/w for and forEach
console.log("by using for loop");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("by using forEach loop");

numbers.forEach(function (num) {
  console.log(num);
});

//with arrow function
console.log("by using forEach with arrow function");
numbers.forEach((Element) => {
  console.log(Element);
});
//using index
const letters = ["a", "b", "c", "d", "e"];
letters.forEach(function (element, index) {
  console.log(`Index: ${index}, Element: ${element}`);
});

// another example

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(capotalize);
fruits.forEach(display);

function display(element) {
  console.log(element);
}

function uppercare(element, index, array) {
  array[index] = element.toUpperCase();
}

function capotalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
