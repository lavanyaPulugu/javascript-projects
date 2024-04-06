// callback function: a function that is passed as an argument to another function
// example 1
function hello(rahul) {
  console.log("hello");
  rahul();
}

function world() {
  console.log("world");
}

function good(hmm) {
  console.log("good");
  hmm();
}

function night() {
  console.log("night");
}

hello(world);

good(night);

// example 2

function add(adding, a, b) {
  let result = a + b;

  adding(result);
}

function display(result) {
  console.log(result);
}

function displaydom(result) {
  document.getElementById("displaypage").textContent = result;
}
add(displaydom, 2, 6);
add(display, 2, 2);

// example 3

function greeting(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greeting("Alice", sayGoodbye);

// example 4

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
  console.log(num * 3);
});

// example5

function fetchData(callback) {
  // Simulate an error
  const error = true;

  if (error) {
    callback(new Error("Failed to fetch data"));
  } else {
    callback(null, "Data successfully fetched");
  }
}

fetchData(function (err, data) {
  if (err) {
    console.error("Error:", err.message);
  } else {
    console.log("Data:", data);
  }
});
