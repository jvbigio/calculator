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
// TODO:
// fix if statements

function getInputType (e) {
  const keyPressed = e.target

  if (keyPressed.classList.contains('number') && !isOperatorPressed) {
    firstOperand += keyPressed.value
    currentInput(keyPressed.value)
    console.log(isOperatorPressed) // false
  } else if (keyPressed.classList.contains('number') && isOperatorPressed) {
    secondOperand += keyPressed.value
    currentInput(keyPressed.value)
    console.log(isOperatorPressed) // true
    if (keyPressed.value === '+') {
      console.log(isOperatorPressed)
      console.log(`${keyPressed.value} pressed`)
      accumulatedValue += keyPressed.value
      console.log(accumulatedValue)
      currentInput(keyPressed.value)
    }
  }

  if (keyPressed.classList.contains('operation') && keyPressed.value !== '=') {
    isOperatorPressed = true
    operation = keyPressed.value
    currentInput(keyPressed.value)
  }

  if (keyPressed.value === '=') {
    calculator.displayOutput = ''
    // not in correct place bc other math operators will be pressed:
    // accumulatedValue = parseFloat(firstOperand) + parseFloat(secondOperand)
    calculate(firstOperand, operation, secondOperand)
    console.log(accumulatedValue) // (38) => storedValue of 25 + 13
  }
  renderScreen()
}

function currentInput (numbers) {
  calculator.displayOutput += numbers
  renderScreen(numbers)
}

function calculate (num1, operator, num2) {
  let computedValue

  if (operator === '*') {
    computedValue = parseFloat(num1) * parseFloat(num2)
  } else if (operator === '/') {
    computedValue = parseFloat(num1) / parseFloat(num2)
  } else if (operator === '+') {
    computedValue = parseFloat(num1) + parseFloat(num2)
  } else if (operator === '-') {
    computedValue = parseFloat(num1) - parseFloat(num2)
  }
  currentInput(computedValue)
}

function renderScreen (data) {
  calcDisplay.textContent = calculator.displayOutput
}
