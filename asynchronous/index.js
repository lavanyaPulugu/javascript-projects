// In asynchronous code execution, tasks are not executed immediately one after another. Instead, tasks that take time to complete (such as network requests, file operations, or timer events) are scheduled to run in the background, and the program continues to execute without waiting for them to finish. Callback functions, promises, or async/await are commonly used to handle asynchronous code.

function fun1(callback) {
  setTimeout(() => {
    console.log("task1");
    callback();
  }, 3000);
}

function fun2() {
  console.log("task2");
  console.log("task3");
  console.log("task4");
}

fun1(fun2);
