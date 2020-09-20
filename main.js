// use this main.js for refactoring to master once working

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

// responding to ANY button press
function getInputType (e) {
  debugger
  const keyPressed = e.target
  // handling number press
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
  // handling operation press
  // whatever we do inside line 41 -68 doesn't related to 69-75
  if (keyPressed.classList.contains('operation') && keyPressed.value !== '=') {
    processOperationBtnPress()
  }
  if (keyPressed.value === '=') {
    processEqualBtnPress()
  }
  renderScreen()
}

function processOperationBtnPress () {
  // const isInContinuosOperation = operation // equated to same as below
  if (operation) { // if in continuous operation
    // continuous
    // then inside of this use if op = +, -, *, /
    if (operation === '+') {
      accumulatedValue = parseFloat(firstOperand) + parseFloat(secondOperand)
      // accumulatedValue += parseFloat(secondOperand)
      calculator.displayOutput = ''
      secondOperand = ''
      // currentInput(accumulatedValue)
    }
    if (operation === '-') {
      // do math
    }
    if (operation === '*') {
      // do math
    }
    if (operation === '/') {
      // do math
    }
  } else { // not continuous
    currentInput(accumulatedValue)
    calcDisplay.displayOutput = ''
    operation = keyPressed.value
    // accumulatedValue = parseFloat(firstOperand) + parseFloat(secondOperand)
    calculate(firstOperand, operation, secondOperand) // new
  }
}

function processEqualBtnPress () {
  calculator.displayOutput = ''
  // currentInput(accumulatedValue)
  calculate(firstOperand, operation, secondOperand)
}

function currentInput (numbers) {
  calculator.displayOutput += numbers
  renderScreen()
}

function calculate (num1, operator, num2) {
  let computedValue

  if (operator === '*') {
    computedValue = parseFloat(num1) * parseFloat(num2)
    return currentInput(computedValue)
  } else if (operator === '/') {
    computedValue = parseFloat(num1) / parseFloat(num2)
    return currentInput(computedValue)
  } else if (operator === '+') {
    computedValue = parseFloat(num1) + parseFloat(num2)
    return currentInput(computedValue)
  } else if (operator === '-') {
    computedValue = parseFloat(num1) - parseFloat(num2)
    return currentInput(computedValue)
  }
  currentInput(num2)
}

function renderScreen () {
  calcDisplay.textContent = calculator.displayOutput
}
