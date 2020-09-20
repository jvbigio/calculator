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
  debugger
  const keyPressed = e.target
  if (keyPressed.classList.contains('number') && !operation) {
    firstOperand += keyPressed.value
    currentInput(keyPressed.value)
  } else if (keyPressed.classList.contains('number') && operation) {
    calculator.displayOutput = ''
    // calculator.displayOutput = firstOperand // new
    secondOperand += keyPressed.value
    currentInput(keyPressed.value)
    // if (secondOperand) {
    //   accumulatedValue += parseFloat(secondOperand)
    //   currentInput(accumulatedValue) // new
    // }
    // currentInput(accumulatedValue)

    calculator.displayOutput = ''
    currentInput(secondOperand) // keep, shows 2ndOp in: 1 + (3)
  }

  if (keyPressed.classList.contains('operation') && keyPressed.value !== '=') {
    if (operation) { // if in continuous operation
      // continuous
      // then inside of this use if op = +, -, *, /
      if (operation === '+') {
        calculator.displayOutput = '' // new

        currentInput(firstOperand)

        firstOperand = parseFloat(firstOperand) + parseFloat(secondOperand) 
        // accumulatedValue += parseFloat(secondOperand)
        calculator.displayOutput = ''
        secondOperand = ''
        currentInput(firstOperand) // keep
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
    } else { // Andy's code
      // not continuous
      // currentInput(accumulatedValue)
      calcDisplay.displayOutput = ''
      operation = keyPressed.value
      // accumulatedValue = parseFloat(firstOperand) + parseFloat(secondOperand)
      // calculate(firstOperand, operation, secondOperand) // 1NaN shows
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
