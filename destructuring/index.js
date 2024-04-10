// Destructuring in JavaScript is a convenient way to extract multiple values from data stored in objects or arrays. It allows you to unpack values from arrays, or properties from objects, into distinct variables.
// extract array example
const colors = ["red", "blue", "pink", "white", "black", "orange"];

const [firstColor, secondColor, thirdColor, ...remainColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(remainColors);

// extract Object example

const person1 = {
  firstname: "lavanya",
  lastname: "pulugu",
  age: 35,
  job: "fullstack developer",
};
const person2 = {
  firstname: "rahul",
  lastname: "talluri",
  age: 5,
};

// const { firstname, lastname, age, job } = person1;
const { firstname, lastname, age, job = "unemployee" } = person2;
console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job);

//destucture in function parameters
function displayPerson({ firstname, lastname, age, job }) {
  console.log(`name:${firstname} ${lastname}`);
  console.log(`age:${age}`);
  console.log(`age:${job}`);
}

const person3 = {
  firstname: "lavanya",
  lastname: "pulugu",
  age: 35,
  job: "fullstack developer",
};
const person4 = {
  firstname: "rahul",
  lastname: "talluri",
  age: 5,
};

displayPerson(person3);
