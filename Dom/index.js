// console.log(document);

// document.body.style.backgroundColor = "hsl(0,0%,15%)";

const username = "";

const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? " Guest" : username;
