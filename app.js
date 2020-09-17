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
    console.log(operation) // + after pressing 1 + (2)
    secondOperand += keyPressed.value
    // currentInput(keyPressed.value) // original
    calculator.displayOutput = ''
    currentInput(secondOperand)

    // if (operation === '+') {
    //   console.log(operation === '+') // true after pressing 2 in 1 + (2)
    //   currentInput(secondOperand)
    //   accumulatedValue = parseFloat(firstOperand) + parseFloat(secondOperand)
    // }
    // calculator.displayOutput = ''
  }

  if (keyPressed.classList.contains('operation') && keyPressed.value !== '=') {
    if (operation) {
      // continuous
      // console.log(operation) // true after 1 + 2 (+)
      // currentInput(keyPressed.value) // original

      currentInput(secondOperand)
      if (operation === '+') {
        // console.log(operation === '+') // true after 1 + 2 (+)
        currentInput(secondOperand)
        accumulatedValue = parseFloat(firstOperand) + parseFloat(secondOperand)
      }
    } else {
      // not continuos
      // console.log(operation)
      // currentInput(accumulatedValue) // keep
      // calculator.displayOutput = ''
      // currentInput(firstOperand)
      operation = keyPressed.value
      // currentInput(keyPressed.value) // original shows => + sign
    }
  }

  if (keyPressed.value === '=') {
    calculator.displayOutput = ''
    calculate(firstOperand, operation, secondOperand)
    console.log(accumulatedValue) // (38) => storedValue of 25 + 13
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
