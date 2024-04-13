// document.getElementById()

const myheading = document.getElementById("hello");

myheading.style.backgroundColor = "red";
myheading.style.textAlign = "center";

// document.getElementsByClassName()

const fruits = document.getElementsByClassName("fruits");

for (let fruit of fruits) {
  fruit.style.backgroundColor = "yellow";
}

console.log(fruits);

// document.getElementsByTagName()

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

for (let h4Element of h4Elements) {
  h4Element.style.backgroundColor = "blue";
}

for (let liElement of liElements) {
  liElement.style.backgroundColor = "pink";
}

// document.querySelector()

const element = document.querySelector(".fruits");

element.style.textAlign = "center";
