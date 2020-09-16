// const result = document.querySelector('.result')
// document.addEventListener('DOMContentLoaded', function () {
//   // renderScreen()
//   // captureDigits()
// })

const calcDisplay = document.querySelector('.calculator-display')
let firstOperand, secondOperand, operation, currentNumber
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
  // console.log(keyPressed.value)
  // first numberSet code block:
  // if (keyPressed.classList.contains('number') && keyPressed.value !== '+') {
  if (keyPressed.classList.contains('number')) {
    console.log(keyPressed.value)

    // captureDigits(keyPressed.value)
    // console.log('1st numbers')
    // firstOperand = keyPressed.value
    // captureDigits(firstOperand)
    // // secondOperand = firstOperand + keyPressed.value
    // console.log(firstOperand) // 11
    // calculator.num1 = firstOperand
    // console.log(secondOperand) // 22
    // calculator.num2 = secondOperand
    // firstOperand = captureDigits(firstOperand)
    // calculator.displayOutput = keyPressed.value
  }

  // second numberSet code block:
  if (keyPressed.classList.contains('operation') && keyPressed.value !== '=') {
    isOperatorPressed = true
    operation = keyPressed.value
    // operation = captureDigits(operation)
    captureDigits(operation)
    console.log('2nd code block')
    // console.log(keyPressed.value)
  }

  if (keyPressed.value === '=') {
    console.log(`${keyPressed.value} clicked`)
    // console.log(firstOperand, operation, secondOperand)
    // calculate(firstOperand, operation, secondOperand)
  }
  renderScreen()
}

function captureDigits (numbers) {
  console.log(numbers)
  const displayOutput = calculator.displayOutput
  // const values = Object.values(calculator)
  if (!displayOutput) {
    calculator.displayOutput = numbers
  } else {
    calculator.displayOutput += numbers
  }
  // console.log(values)
  renderScreen(numbers)
}

function calculate (num1, operator, num2) {
  let computedValue

  if (operator === '*') {

  } else if (operator === '/') {

  } else if (operator === '+') {
    computedValue = parseFloat(num1) + parseFloat(num2)
  } else if (operator === '-') {

  }
  console.log(computedValue)
  // return renderScreen(computedValue)
}

function renderScreen (data) {
  calcDisplay.textContent = calculator.displayOutput
  // console.log(data)
}
