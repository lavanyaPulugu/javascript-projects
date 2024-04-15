// addEventListener is a method used in JavaScript to attach an event handler to a specified element.

const myBox = document.getElementById("myBox");
// function changeColor(event) {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "hello ";
// }

// myBox.addEventListener("click", changeColor);

// by using arrow functions
myBox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "hello ";
});

myBox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "dont do it ";
});

myBox.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "green";
  event.target.textContent = "click me ";
});
