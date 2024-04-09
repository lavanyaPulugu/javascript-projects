// In JavaScript, the this keyword refers to the context within which a function is executed. The value of this depends on how the function is called. Understanding this is crucial for object-oriented programming and working with functions that are invoked in different contexts.

const person = {
  name: "lavanya",
  lastname: "pulugu",
  age: 30,
  isEmployee: true,
  sayHello: function () {
    console.log(`Hwllo ${this.name}`), console.log(`age of ${this.age}`);
  },
};

person.sayHello();

// console.log(this);
