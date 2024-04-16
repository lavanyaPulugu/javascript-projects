// const myButton = document.getElementById("mybutton");

// myButton.classList.add("enabled");

// myButton.addEventListener("mouseover", (event) => {
//   event.target.classList.add("hover");
// });

// myButton.addEventListener("mouseout", (event) => {
//   event.target.classList.remove("hover");
// });

let myButton = document.querySelectorAll("#mybutton");

myButton.forEach((buttton) => {
  buttton.classList.add("enabled");
});

myButton.forEach((buttton) => {
  buttton.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
  });
});
