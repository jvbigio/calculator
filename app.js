const calcDisplay = document.querySelector('.calculator-display')
const calculator = {
  displayOutput: ''
}
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
      accumulatedValue += parseFloat(secondOperand)
      currentInput(accumulatedValue) // new
    }
    currentInput(accumulatedValue)

    calculator.displayOutput = ''
    currentInput(secondOperand)
  }

  if (keyPressed.classList.contains('operation') && keyPressed.value !== '=') {
    // if (operation) { // Andy's code
    // continuous

    if (operation === '+') {
      accumulatedValue = parseFloat(firstOperand) + parseFloat(secondOperand)
      // accumulatedValue += parseFloat(secondOperand)
      calculator.displayOutput = ''
      secondOperand = ''
      currentInput(accumulatedValue)
    } else { // Andy's code
      // not continuous
      currentInput(accumulatedValue)
      calcDisplay.displayOutput = ''
      operation = keyPressed.value
      accumulatedValue = parseFloat(firstOperand) + parseFloat(secondOperand)
    }
  }
  if (keyPressed.value === '=') {
    calculator.displayOutput = ''
    // currentInput(accumulatedValue)
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
