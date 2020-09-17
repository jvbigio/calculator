// const result = document.querySelector('.result')
// document.addEventListener('DOMContentLoaded', function () {
//   // renderScreen()
//   // captureDigits()
// })

const calcDisplay = document.querySelector('.calculator-display')
const calculator = {
  displayOutput: ''
}
let firstOperand = ''
let secondOperand = ''
let operation = ''
let accumulatedValue = ''
// let isOperatorPressed = false
const buttons = document.querySelector('.buttons-container')
buttons.addEventListener('click', getInputType)

// TODO:
// fix if statements

function getInputType (e) {
  const keyPressed = e.target
  if (keyPressed.classList.contains('number') && !operation) {
    firstOperand += keyPressed.value
    currentInput(keyPressed.value)
  } else if (keyPressed.classList.contains('number') && operation) {
    secondOperand += keyPressed.value
    calculator.displayOutput = ''
    currentInput(secondOperand)
  }

  if (keyPressed.classList.contains('operation') && keyPressed.value !== '=') {
    if (operation) {
      // continuous

      currentInput(secondOperand)
      if (operation === '+') {
        currentInput(secondOperand)
        accumulatedValue = parseFloat(firstOperand) + parseFloat(secondOperand)
      }
    } else {
      // not continuos

      operation = keyPressed.value
    }
  }

  if (keyPressed.value === '=') {
    calculator.displayOutput = ''
    calculate(firstOperand, operation, secondOperand)
  }
  renderScreen()
}

function currentInput (numbers) {
  calculator.displayOutput += numbers
  renderScreen()
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

function renderScreen () {
  calcDisplay.textContent = calculator.displayOutput
}
