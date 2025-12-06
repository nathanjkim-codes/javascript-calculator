//
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

//
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const resetDiv = document.getElementById("reset");
const buttons = document.querySelectorAll("#choices button");

// Computer's choice function
function computerChoice() {
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
}

roundsPlayed++;
