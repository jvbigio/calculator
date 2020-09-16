// const result = document.querySelector('.result')
document.addEventListener('DOMContentLoaded', function () {
  // renderScreen()
  // captureDigits()
})

const calcDisplay = document.querySelector('.calculator-display')
let firstNumberSet, secondNumberSet, operation
let isOperatorPressed = false
const buttons = document.querySelector('.buttons-container')
buttons.addEventListener('click', getInputType)

const calculator = {
  displayOutput: null,
  num1: null,
  num2: null,
  operator: null
}

function getInputType (e) {
  const keyPressed = e.target

  if (keyPressed.classList.contains('number')) {
    // debugger
    firstNumberSet = keyPressed.value
    console.log(firstNumberSet)
    // calculator.num1 = firstNumberSet
    captureDigits(keyPressed.value)
  }

  if (keyPressed.classList.contains('operation') && keyPressed.value !== '=') {
    isOperatorPressed = true
    // calculator.num1 = calculator.displayOutput
    if (calculator.displayOutput !== '+') {
      const beforeOperator = calculator.displayOutput
      console.log(beforeOperator)
    }
    firstNumberSet = calculator.displayOutput
    console.log(firstNumberSet)
    operator = keyPressed.value
    calculator.operator = keyPressed.value
    console.log(calculator)
    captureDigits(operator)
    console.log(`${operator} operator pressed!`)
    // calcDisplay.innerHTML = operator
  }
  renderScreen()
}

function captureDigits (numbers) {
  console.log(numbers)
  const displayOutput = calculator.displayOutput
  // calculator.displayOutput = displayOutput === null ? numbers : displayOutput + numbers
  // console.log(displayOutput)
  const values = Object.values(calculator)
  // calcDisplay.innerHTML = numbers + numbers
  if (!displayOutput) {
    calculator.displayOutput = numbers
  } else {
    calculator.displayOutput += numbers
  }
  console.log(values)
}

function calculate (num1, operator, num2) {
  let computedValue

  if (operator === '*') {

  } else if (operator === '/') {

  } else if (operator === '+') {
    computedValue = parseFloat(num1) + parseFloat(num2)
  } else if (operator === '-') {

  }
  renderScreen(computedValue)
}

function renderScreen (data) {
  calcDisplay.textContent = calculator.displayOutput
  // calcDisplay.textContent = '0'
}
