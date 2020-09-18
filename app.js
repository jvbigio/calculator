// const result = document.querySelector('.result')
// document.addEventListener('DOMContentLoaded', function () {
//   // renderScreen()
//   // captureDigits()
// })

const calcDisplay = document.querySelector('.calculator-display')
const calculator = { displayOutput: '' }
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
    calculator.displayOutput = '' // test

    secondOperand += keyPressed.value
    currentInput(keyPressed.value) // original
    // new if statement
    if (secondOperand) {
      secondOperand = ''
      secondOperand += keyPressed.value
      accumulatedValue += parseFloat(secondOperand) // new
      currentInput(accumulatedValue) // new
    }
    currentInput(accumulatedValue)

    // if (accumulatedValue) {
    calculator.displayOutput = ''
    // currentInput(secondOperand) // orig
    currentInput(keyPressed.value)
    // currentInput(firstOperand) // keep, remove for test
    // }
  }

  if (keyPressed.classList.contains('operation') && keyPressed.value !== '=') {
    if (operation) {
      // continuous
      if (operation === '+') {
        // original KEEP:
        accumulatedValue = parseFloat(firstOperand) + parseFloat(secondOperand)
        // accumulatedValue += parseFloat(secondOperand)

        calculator.displayOutput = ''
        currentInput(accumulatedValue)
      }
    } else {
      // not continuos
      console.log(operation)
      currentInput(accumulatedValue)
      calcDisplay.displayOutput = ''
      operation = keyPressed.value
    }
  }
  // = sign never pressed yet
  if (keyPressed.value === '=') {
    calculator.displayOutput = ''
    // non-continuous only:
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
