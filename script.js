let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const attemptsText = document.getElementById("attempts");

  attempts++;

  if (userGuess === randomNumber) {
    message.innerText = "🎉 Correct! You guessed it!";
  } 
  else if (userGuess < randomNumber) {
    message.innerText = "Too low! Try again.";
  } 
  else {
    message.innerText = "Too high! Try again.";
  }

  attemptsText.innerText = "Attempts: " + attempts;
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  document.getElementById("message").innerText = "";
  document.getElementById("attempts").innerText = "";
  document.getElementById("guessInput").value = "";
}
