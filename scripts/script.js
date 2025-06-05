// Step 1: Basic Math Functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
      return "Error";
  }
  return a / b;
}

// Step 2: Calculator Logic Variables
let firstNumber = '';
let operator = '';
let secondNumber = '';
let waitingForNumber = false;

// Step 2: Operate Function
function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  
  switch(operator) {
      case '+':
          return add(a, b);
      case '-':
          return subtract(a, b);
      case '*':
          return multiply(a, b);
      case '/':
          return divide(a, b);
      default:
          return null;
  }
}

// Step 4: Make It Work - Display Functions
const display = document.getElementById('display');

function updateDisplay(value) {
  display.value = value;
}

function inputNumber(num) {
  if (waitingForNumber) {
      display.value = num;
      waitingForNumber = false;
  } else {
      display.value = display.value === '0' ? num : display.value + num;
  }
}

function inputOperator(op) {
  if (firstNumber === '') {
      firstNumber = display.value;
  } else if (operator !== '') {
      secondNumber = display.value;
      const result = operate(operator, firstNumber, secondNumber);
      updateDisplay(result);
      firstNumber = result.toString();
  }
  
  operator = op;
  waitingForNumber = true;
}

function calculate() {
  if (firstNumber !== '' && operator !== '' && !waitingForNumber) {
      secondNumber = display.value;
      const result = operate(operator, firstNumber, secondNumber);
      updateDisplay(result);
      
      // Reset for next calculation
      firstNumber = result.toString();
      operator = '';
      secondNumber = '';
      waitingForNumber = true;
  }
}

function clearDisplay() {
  display.value = '0';
  firstNumber = '';
  operator = '';
  secondNumber = '';
  waitingForNumber = false;
}

// Initialize display
clearDisplay();