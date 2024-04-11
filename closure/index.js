// In JavaScript, a closure is a combination of a function and the lexical environment within which that function was declared. This allows the function to retain access to variables from its containing scope even after the outer function has finished executing.

function createCounter() {
  let count = 0;
  function increment() {
    count++;
    console.log(`count increased to ${count}`);
  }

  return { increment };
}

const counter = createCounter();

counter.increment();
counter.increment();

//another example
function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }
  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }

  function getScore() {
    return score;
  }

  return { increaseScore, decreaseScore, getScore };
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(6);

console.log(`the final score is ${game.getScore()}pts`);
