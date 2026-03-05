// ===== Basic Math Operation Functions =====

// Adds two numbers
function add(a, b) {
  return a + b;
}
console.log(add(3, 5)); // 8

// Subtracts second number from first number
function subtract(a, b) {
  return a - b;
}
console.log(subtract(10, 3)); // 7

// Multiplies two numbers
function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 7)); // 21

// Divides first number by second number
function divide(a, b) {
  if (b === 0) {
    return "Don't divide by 0!";
  }
  return a / b;
}
console.log(divide(3, 0)); // Don't divide by 0!
console.log(divide(10, 5)); // 2

// Variables to update display for later
// Initilized as null to distinguish from 0
let firstNumber = null; // No value yet
let currentNumber = ""; // Empty string to join Numbers( "1" + "2" = "12")
let operator = null; // No operator yet

// ===== Operate Function =====

// Takes an operator and two numbers,then performs calculation
function operate(operator, a, b) {
  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") {
    if (b === 0) return "Don't divide by 0!";
    return divide(a, b);
  }
}
console.log(operate("+", 3, 5)); // 8
console.log(operate("-", 10, 3)); // 7
console.log(operate("*", 3, 7)); // 21
console.log(operate("/", 3, 0)); // Don't divide by 0!
console.log(operate("/", 10, 5)); // 2

// Update number variable and display when a digit button is clicked
// Select all number buttons
const numberButtons = document.querySelectorAll(".number");

// Select the calculator display
const display = document.getElementById("display");

// Add click event listeners to each number button
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the digit from the clicked button
    const digit = button.textContent;

    // Append the digit to the current number
    currentNumber += digit;

    let text = ""; // Initialize the content to show on the display

    if (firstNumber) {
      text += firstNumber; // Add firstNumber if it exists
    }

    if (operator) {
      text += " " + operator; // Add operator if it exists
    }

    if (currentNumber) {
      text += " " + currentNumber; // Add currentNumber if it exists
    }

    display.textContent = text; // Show the text on the display
  });
});

// Store the operator selected by the user(+. -, *, /)
// this function is called when an operator button is selected
function inputOperator(op) {
  firstNumber = currentNumber; // Save the number
  operator = op; // save the operator
  currentNumber = ""; // clear currentNumber
}

// Called when the '=' button is clicked
function calculate() {
  const num1 = parseFloat(firstNumber); // Convert string to number
  const num2 = parseFloat(currentNumber); // Convert string to number

  const result = operate(operator, num1, num2); // perform the calculation

  display.textContent = result; // Show result on the display

  currentNumber = result; // Save result for next calculation

  firstNumber = null; // Reset firstNumber
  operator = null; // Reset operator
}

// Select all operator buttons(+, -, *, /)
const operatorButton = document.querySelectorAll(".operator");

operatorButton.forEach((button) => {
  button.addEventListener("click", () => {
    const clickedOperator = button.textContent;

    // Prevent operator input if no number has been entered
    if (currentNumber === "") return;

    // If this is the first operator, store the current number as firstNumber
    if (firstNumber === null) {
      firstNumber = currentNumber;
    } else {
      // If firstNumber already exists, perform the calculation
      firstNumber = operate(operator, firstNumber, currentNumber);
    }

    // Store the clicked operator
    operator = clickedOperator;

    // Reset currentNumber to prepare for the next number input
    currentNumber = "";

    // Update the display to show the current expression
    display.textContent = firstNumber + " " + operator;
  });
});

// add equals button click event to trigger calculation
const equalsButton = document.querySelector(".equal");

equalsButton.addEventListener("click", () => {
  calculate();
});

// When the clear button is clicked, reset the calculator
const clearButton = document.querySelector(".clear");

clearButton.addEventlistener("click", () => {
  firstNumber = null;
  currentNumber = "";
  operator = null;

  display.textContent = "0";
});
