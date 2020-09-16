// const result = document.querySelector('.result')
// document.addEventListener('DOMContentLoaded', function () {
//   // renderScreen()
//   // captureDigits()
// })

const calcDisplay = document.querySelector('.calculator-display')
let firstOperand = ''
let secondOperand = ''
let operation = ''
let accumulatedValue = ''
let isOperatorPressed = false
const buttons = document.querySelector('.buttons-container')
buttons.addEventListener('click', getInputType)

const calculator = {
  displayOutput: '',
  firstNumbers: '',
  secondNumbers: '',
  accumulatedValue: '',
  operator: ''
}

function getInputType (e) {
  const keyPressed = e.target

  if (keyPressed.classList.contains('number') && !isOperatorPressed) {
    firstOperand = keyPressed.value
    secondOperand = firstOperand
    currentInput(firstOperand)
  } else if (keyPressed.classList.contains('number') && isOperatorPressed) {
    secondOperand = keyPressed.value
    currentInput(secondOperand)
  }

  if (keyPressed.classList.contains('operation') && keyPressed.value !== '=') {
    isOperatorPressed = true
    operation = keyPressed.value
    currentInput(operation)
  }

  if (keyPressed.value === '=') {
    console.log(firstOperand, operation, secondOperand)
    calculator.displayOutput = ''
    // ???? maybe accumulatedValue needed elsewhere ???? //
    accumulatedValue = parseFloat(firstOperand) + parseFloat(secondOperand)
    console.log(accumulatedValue)
    calculate(firstOperand, operation, secondOperand)
  }
  renderScreen()
}

function currentInput (numbers) {
  const displayOutput = calculator.displayOutput
  if (!displayOutput) {
    calculator.displayOutput = numbers
  } else {
    calculator.displayOutput += numbers
  }
  renderScreen(numbers)
}

function calculate (num1, operator, num2) {
  let computedValue

  if (operator === '*') {

  } else if (operator === '/') {

  } else if (operator === '+') {
    computedValue = parseFloat(num1) + parseFloat(num2)
  } else if (operator === '-') {

  }
  currentInput(computedValue)
}

function renderScreen (data) {
  calcDisplay.textContent = calculator.displayOutput
}
