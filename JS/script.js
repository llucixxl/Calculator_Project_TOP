// Main algorithm code for the calculator

// Functions for the add, subtract, multiply and divide operations

// Add operation:

function add(a, b) {
  return a + b;
}

// Subtract operation:

function subtract(a, b) {
  return a - b;
}

// Multiply operation:

function multiply(a, b) {
  return a * b;
}

// Divide operation:

function divide(a, b) {
  return a / b;
}

// End of operation functions

// Variable for each part of the operation: number(operand), operator, number(operand)

let number1;
let operator;
let number2;

// End of variable for each part of the operation

// Operate function that calls one of the above functions

function operate(number1, operator, number2) {
  return operator(number1, number2);
}

console.log(operate(1, add, 4));
