// In JavaScript, an object is a composite data type that allows you to store collections of key-value pairs. It's one of the most fundamental data structures in the language and is used to represent complex entities with properties and methods. Objects are dynamic, meaning that properties can be added, modified, or removed at runtime.

const persons = {
  firstname: "lavanya",
  lastname: "pulugu",
  age: 30,
  isEmployee: true,
};

console.log(persons);

const persons2 = {
  firstname: "rahul",
  lastname: "talluri",
  age: 30,
  isEmployee: false,
  sayhello: () => {
    console.log(`${persons2.firstname} hello`);
  },
};

persons2.sayhello();
