// The setTimeout() function in JavaScript is used to execute a specified function or code block once after a specified delay (in milliseconds).

// function sayHello() {
//   window.alert("hello");
// }

// setTimeout(sayHello, 3000);

// setTimeout(() => window.alert("bolo"), 5000);

let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => window.alert("hello"), 3000);
  console.log("STARTER");
}

function clearTimer() {
  clearTimeout(timeoutId);
  console.log("CLEARED");
}
