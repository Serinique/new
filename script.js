let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const message = document.getElementById('message');
  const score = document.getElementById('score');

  let guess = Number(guessInput.value);
  attempts++;

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
    score.textContent = "Refresh the page to play again.";
  } else if (guess < secretNumber) {
    message.textContent = "Try higher!";
    score.textContent = `Attempts: ${attempts}`;
  } else {
    message.textContent = "Try lower!";
    score.textContent = `Attempts: ${attempts}`;
  }

  guessInput.value = "";
  guessInput.focus();
}
