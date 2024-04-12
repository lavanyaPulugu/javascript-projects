// Error handling in JavaScript is crucial for writing robust and reliable code. JavaScript provides several mechanisms for error handling, including try...catch, throw, and finally

try {
  console.log(x);
} catch (error) {
  console.log(error);
} finally {
  console.log("this is always executed");
}

console.log("we have reached the end");

//another example
try {
  const dividend = window.prompt("enter a dividend:");
  const divisor = window.prompt("enter a divisor:");

  if (divisor == 0) {
    throw new Error("you can't divide by zero");
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("values must be a number");
  }

  const result = dividend / divisor;
  console.log(result);
} catch (error) {
  console.log(error);
}
console.log("we have reached the end");
