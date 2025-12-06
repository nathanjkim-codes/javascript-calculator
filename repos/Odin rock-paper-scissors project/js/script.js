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
