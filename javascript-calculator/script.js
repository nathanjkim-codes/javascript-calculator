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
let secondNumber = null; // No value yet
let operator = null; // No operator yet

// ===== Operate Function =====

// Takes an operator and two numbers,then performs calculation
function operate(operator, a, b) {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") {
    if (b === 0) return "Don't divide by 0!";
    return a / b;
  }
}
console.log(operate("+", 3, 5)); // 8
console.log(operate("-", 10, 3)); // 7
console.log(operate("*", 3, 7)); // 21
console.log(operate("/", 3, 0)); // Don't divide by 0!
console.log(operate("/", 10, 5)); // 2

// Update number variable and display when a digit button is clicked
let currentNumber = ""; // Empty string to join Numbers( "1" + "2" = "12")

// Select DOM elements
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

    // Update the display to reflect the current number
    display.textContent = currentNumber;
  });
});
