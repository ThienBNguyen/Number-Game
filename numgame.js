let computerGuess;
let userGuessLog = [];
let attempts = 0;
let maxGuesses = 10;
function easyPick() {
  maxGuesses = 10;
  document.getElementById("easyInput").className = "activeButton";
  document.getElementById("hardInput").className = "";
}
function hardPick() {
  maxGuesses = 5;
  document.getElementById("easyInput").className = "";
  document.getElementById("hardInput").className = "activeButton";
}
function newGame() {
  window.location.reload();
  // console.log(easyPick);
}
function gameEnded() {
  document.getElementById("newGame").style.display = "inline";
  document.getElementById("easyInput").style.display = "none";
  document.getElementById("hardInput").style.display = "none";
  document.getElementById("userInput").setAttribute("readonly", "readonly");
}
function init() {
  computerGuess = Math.floor(Math.random() * 100 + 1);
  // console.log(computerGuess);
  document.getElementById("newGame").style.display = "none";
}

function compareGuess() {
  let userGuess = " " + document.getElementById("userInput").value;
  // console.log(userGuess);
  userGuessLog.push(userGuess);
  document.getElementById("userGuess").innerHTML = userGuessLog;
  // console.log(userGuessLog);
  attempts++;
  document.getElementById("userPlay").innerHTML = attempts;
  if (userGuessLog.length < maxGuesses) {
    if (userGuess > computerGuess) {
      document.getElementById("userResult").innerHTML =
        "your guess is too high";
      document.getElementById("userInput").value = "";
    } else if (userGuess < computerGuess) {
      document.getElementById("userResult").innerHTML = "your guess is too low";
      document.getElementById("userInput").value = "";
    } else {
      document.getElementById("userResult").innerHTML =
        "corrent! you got it in" + attempts + "attemts.";
      document.getElementById("container").style.backgroundColor = "green";
      gameEnded();
    }
  } else {
    if (userGuess > computerGuess) {
      document.getElementById("userResult").innerHTML =
        "You lose!" + "<br> the number was " + computerGuess;
      document.getElementById("container").style.backgroundColor = "red";
      gameEnded();
    } else if (userGuess < computerGuess) {
      document.getElementById("userResult").innerHTML =
        "You lose!" + "<br> the number was " + computerGuess;
      document.getElementById("container").style.backgroundColor = "red";
      gameEnded();
    } else {
      document.getElementById("userResult").innerHTML =
        "corrent! you got it in" + attempts + "attemts.";
      document.getElementById("container").style.backgroundColor = "green";
      gameEnded();
    }
  }
}
