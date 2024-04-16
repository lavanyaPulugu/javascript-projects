const buttons = document.querySelectorAll("button");

const newButton = document.createElement("button");
newButton.textContent = "button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

//create an element
buttons.forEach((button) => {
  button.style.backgroundColor = "green";
  button.addEventListener("click", (event) => {
    button.style.backgroundColor = "red";
  });
});

//remove an element
buttons.forEach((buttons) => {
  buttons.addEventListener("click", (event) => {
    event.target.remove();
  });
});
