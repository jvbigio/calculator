// const result = document.querySelector('.result')
// document.addEventListener('DOMContentLoaded', function () {
//   // renderScreen()
//   // captureDigits()
// })

const calcDisplay = document.querySelector('.calculator-display')
let firstOperand = ''
let secondOperand = ''
let operation = ''
let accumulatedValue = ''
let isOperatorPressed = false
const buttons = document.querySelector('.buttons-container')
buttons.addEventListener('click', getInputType)
// const btnPressed = document.querySelectorAll('button')
// btnPressed.forEach(btn => {
//   btn.addEventListener('click', e => {
//     const activekey = e.target
//     if (activekey) {
//       activekey.classList.toggle('.btn-active')
//     }
//   })
// })

const calculator = {
  displayOutput: '',
  firstNumbers: '',
  secondNumbers: '',
  accumulatedValue: '',
  operator: ''
}
// TODO:
// fix if statements

function getInputType (e) {
  const keyPressed = e.target

  // change button color when button pressed:

  // is number AND !operator press
  if (keyPressed.classList.contains('number') && !isOperatorPressed) {
    firstOperand += keyPressed.value
    currentInput(keyPressed.value)
    console.log(isOperatorPressed) // false
    // is number AND operator has been pressed
  } else if (keyPressed.classList.contains('number') && isOperatorPressed) {
    secondOperand += keyPressed.value
    currentInput(keyPressed.value)
    console.log(isOperatorPressed) // true
    if (keyPressed.value === '+') {
      // new, find spot for it:
      console.log(isOperatorPressed) // true as soon as 2nd + pressed
      console.log(`${keyPressed.value} pressed`)
      accumulatedValue += keyPressed.value
      currentInput(keyPressed.value)
    }
  }

  // operation but NOT equal sign
  if (keyPressed.classList.contains('operation') && keyPressed.value !== '=') {
    isOperatorPressed = true
    operation = keyPressed.value
    currentInput(keyPressed.value)
  }

  if (keyPressed.value === '=') {
    calculator.displayOutput = ''

    // not in correct place bc other math operators will be pressed:
    accumulatedValue = parseFloat(firstOperand) + parseFloat(secondOperand)
    calculate(firstOperand, operation, secondOperand)
    console.log(accumulatedValue) // (38) => storedValue of 25 + 13
  }
  renderScreen()
}

function currentInput (numbers) {
  calculator.displayOutput += numbers
  renderScreen(numbers)
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

function renderScreen (data) {
  calcDisplay.textContent = calculator.displayOutput
}
