const calcDisplay = document.querySelector('.calculator-display')
const calculator = { displayOutput: '' }
let firstOperand = ''
let secondOperand = ''
let operation = ''
let accumulatedValue = ''
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
    calculator.displayOutput = ''

    secondOperand += keyPressed.value
    currentInput(keyPressed.value)
    if (secondOperand) {
      secondOperand = ''
      secondOperand += keyPressed.value
      accumulatedValue += parseFloat(secondOperand)
      currentInput(accumulatedValue)
    }
    currentInput(accumulatedValue)

    calculator.displayOutput = ''
    currentInput(keyPressed.value)
  }

  if (keyPressed.classList.contains('operation') && keyPressed.value !== '=') {
    // if (operation) { // Andy's code
    // continuous
    if (operation === '+') {
      accumulatedValue = parseFloat(firstOperand) + parseFloat(secondOperand)

      calculator.displayOutput = ''
      currentInput(accumulatedValue)
      // }
    } else { // Andy's code
      // not continuos
      currentInput(accumulatedValue)
      calcDisplay.displayOutput = ''
      operation = keyPressed.value
    }
  }
  if (keyPressed.value === '=') {
    calculator.displayOutput = ''
    calculate(firstOperand, operation, secondOperand)
    accumulatedValue = parseFloat(firstOperand) + parseFloat(secondOperand)
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
    // return currentInput(computedValue)
  } else if (operator === '/') {
    computedValue = parseFloat(num1) / parseFloat(num2)
    // return currentInput(computedValue)
  } else if (operator === '+') {
    computedValue = parseFloat(num1) + parseFloat(num2)
    // return currentInput(computedValue)
  } else if (operator === '-') {
    computedValue = parseFloat(num1) - parseFloat(num2)
    // return currentInput(computedValue)
  }
  currentInput(computedValue)
}

function renderScreen () {
  calcDisplay.textContent = calculator.displayOutput
}
