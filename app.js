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
    // processOperationBtnPress()

    if (operation) { // if in continuous operation
      if (operation === '+') {
        calculator.displayOutput = ''
        currentInput(firstOperand)
        firstOperand = parseFloat(firstOperand) + parseFloat(secondOperand)
        calculator.displayOutput = ''
        secondOperand = ''
        currentInput(firstOperand)
      }
      if (operation === '-') {
        calculator.displayOutput = ''
        currentInput(firstOperand)
        firstOperand = parseFloat(firstOperand) - parseFloat(secondOperand)
        calculator.displayOutput = ''
        secondOperand = ''
        currentInput(firstOperand)
      }
      if (operation === '*') {
        calculator.displayOutput = ''
        currentInput(firstOperand)
        firstOperand = parseFloat(firstOperand) * parseFloat(secondOperand)
        calculator.displayOutput = ''
        secondOperand = ''
        currentInput(firstOperand)
      }
      if (operation === '/') {
        calculator.displayOutput = ''
        currentInput(firstOperand)
        firstOperand = parseFloat(firstOperand) / parseFloat(secondOperand)
        calculator.displayOutput = ''
        secondOperand = ''
        currentInput(firstOperand)
      }
    } else { // not continuous
      calcDisplay.displayOutput = ''
      operation = keyPressed.value
    }
  }
  if (keyPressed.value === '=') {
    calculator.displayOutput = ''
    calculate(firstOperand, operation, secondOperand)
    // processEqualBtnPress()
  }
  renderScreen()
}

// function processOperationBtnPress () {

//   if (operation) { // if in continuous operation
//     // then inside of this use if op = +, -, *, /
//     if (operation === '+') {
//       calculator.displayOutput = ''
//       currentInput(firstOperand)
//       firstOperand = parseFloat(firstOperand) + parseFloat(secondOperand)
//       calculator.displayOutput = ''
//       secondOperand = ''
//       currentInput(firstOperand)
//     }
//     if (operation === '-') {
//       // do math
//     }
//     if (operation === '*') {
//       // do math
//     }
//     if (operation === '/') {
//       // do math
//     }
//   } else { // not continuous
//     calcDisplay.displayOutput = ''
//     operation = keyPressed.value
//   }
// }

// function processEqualBtnPress () {
//   calculator.displayOutput = ''
//   calculate(firstOperand, operation, secondOperand)
// }

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
    // console.log(computedValue === Number.isInteger)
    // // return (computedValue === Number.isInteger) ? currentInput(computedValue) : currentInput(computedValue.toFixed(3))
    // if (computedValue === Number.isInteger) {
    //   return currentInput(computedValue)
    // } else {
    //   return currentInput(computedValue.toFixed(3))
    // }
    // isInteger isn't the solution. find another way
    // console.log(computedValue === Number.isInteger) // 4/3 false
    // console.log(computedValue === Number.isInteger) // 5/3 false
    console.log(computedValue === Number.isInteger) // 6/3 false
    console.log(computedValue === Number.isInteger) // 6/2 false
    // return currentInput(computedValue.toFixed(3))
    return currentInput(computedValue) // original
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

// console.log(5 / 2) // 2.5
// console.log(5 % 5) // 0 for no decimals
// console.log(6 / 2) // 3
// console.log(6 % 2) // 0
// console.log(Number.isInteger(4 / 3)) // false
// console.log(Number.isInteger(4 / 2)) // true
// console.log(Number.isInteger(6 / 2)) // true
// console.log(Number.isInteger(5 / 5)) // true

// console.log(parseFloat(2.5).toFixed(3))

/// modulus
console.log(5 % 2) // 1
console.log(6 % 5) // 1
console.log(5 % 5) // 0
console.log(6 % 2) // 0
console.log(9 % 3) // 0
console.log(9 % 4) // 1
// so all decimals have modolus 1
