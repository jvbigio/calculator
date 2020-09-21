const calcDisplay = document.querySelector('.calculator-display')
const calculator = {
  displayOutput: ''
}
let firstOperand = ''
let secondOperand = ''
let operation = ''
const buttons = document.querySelector('.buttons-container')
buttons.addEventListener('click', getInputType)

function getInputType (e) {
  // debugger
  const keyPressed = e.target
  if (keyPressed.classList.contains('number') && !operation) {
    firstOperand += keyPressed.value
    currentInput(keyPressed.value)
  } else if (keyPressed.classList.contains('number') && operation) {
    calculator.displayOutput = ''
    secondOperand += keyPressed.value
    currentInput(keyPressed.value)
    calculator.displayOutput = ''
    currentInput(secondOperand)
  }

  if (keyPressed.classList.contains('operation') && keyPressed.value !== '=') {
    if (operation) { // if in continuous operation
      // then inside of this use if op = +, -, *, /
      if (operation === '+') {
        calculator.displayOutput = ''
        currentInput(firstOperand)
        firstOperand = parseFloat(firstOperand) + parseFloat(secondOperand)
        calculator.displayOutput = ''
        secondOperand = ''
        currentInput(firstOperand)
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
      calcDisplay.displayOutput = ''
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
