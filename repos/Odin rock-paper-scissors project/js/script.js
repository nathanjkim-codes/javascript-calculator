//
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

//
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const roundsPlayedDiv = document.getElementById("roundsPlayed");
const resetDiv = document.getElementById("reset");
const buttons = document.querySelectorAll("#choices button");

// Computer's choice function
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// play round function Compares choices and determines the result of one round
function playRound(humanChoice, computerChoice) {
  let roundResult = "";
  if (humanChoice === computerChoice) {
    roundResult = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundResult = `you win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    roundResult = `you lose! ${computerChoice} beats ${humanChoice}`;
  }

  roundsPlayed++;

  // Update UI
  resultDiv.textContent = roundResult;
  scoreDiv.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
  roundsPlayedDiv.textContent = `Rounds Played: ${roundsPlayed} / ${maxRounds}`;
}

// Button click events
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Button class name is used as the choice (rock, paper, scissors)
    const humanChoice = button.className;
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);


      // Disable buttons
      buttons.forEach((btn) => (btn.disabled = true));
    }
  });
});    

