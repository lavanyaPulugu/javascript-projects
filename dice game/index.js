function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceimages = document.getElementById("diceimages");
  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="assets/${value}.png" alt="dice ${value}>`);
  }
  diceResult.textContent = `dice: ${values.join(", ")}`;
  diceimages.innerHTML = images.join("");
}
