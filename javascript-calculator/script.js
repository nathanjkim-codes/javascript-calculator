// ===== Basic Math Operation Functions =====

// Adds two numbers
function add(a, b) {
  return a + b;
}

// Subtracts second number from first number
function subtract(a, b) {
  return a - b;
}

// Multiplies two numbers
function multiply(a, b) {
  return a * b;
}

// Divides first number by second number
function divide(a, b) {
  if (b === 0) {
    return "Don't divide by 0!";
  }
  return a / b;
}

function divide(a, b) {
  if (b === 0) {
    return "Don't divide by 0!";
  } else {
    return a / b;
  }
}

// Variables to update display for later
// Initilized as null to distinguish from 0
let firstNumber = null; // No value yet
let secondNumber = null; // No value yet
let operator = null; // no operator yet

//
function operate(operator, a, b) {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") return a / b;
}
