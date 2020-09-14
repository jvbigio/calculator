// const operations = document.querySelectorAll('.operation')
const result = document.querySelector('.result')
let num1, num2, operation
const inputedNumbers = []
let isFirstKeyPressed = true
const outputedResult = ''

const buttons = document.querySelector('.buttons-container')
buttons.addEventListener('click', getInput)

function getInput (e) {
  const keyPressed = e.target
  // const outputResult = result.textContent
  // console.log(outputResult)
  // console.log(keyPressed)
  if (keyPressed.classList.contains('number')) {
    if (isFirstKeyPressed) {
      num1 = e.target.textContent
      // inputedNumbers.push(num1)
      result.innerHTML = num1
    } else {
      num2 = e.target.textContent
      result.innerHTML = num2
    }
    // result.innerHTML = num1
    // result.innerHTML = inputedNumbers.length
    // console.log(inputedNumbers)
    // num1 = inputedNumbers[0]
    // num2 = inputedNumbers[1]
  } else if (keyPressed.classList.contains('operation')) {
    // console.log('operation button was pressed!!')
    isFirstKeyPressed = false
    if (keyPressed.textContent !== '=') {
      operation = keyPressed.textContent
      console.log(operation)
    } else if (keyPressed.textContent === '=') {
      console.log('equal sign pressed') // works

      calculator(num1, operation, num2)
    }
  }
}

function calculator (num1, operator, num2) {
  // console.log(num1)
  // console.log(operator)
  // console.log(num2)
  let computedValue

  if (operator === '*') {
    return
  } else if (operator === '/') {
    return
  } else if (operator === '+') {
    computedValue = parseFloat(num1) + parseFloat(num2)
  } else if (operator === '-') {
    return
  }
  // result.innerHTML = computedValue

  renderAnswer(computedValue)
}

function renderAnswer (answer) {
  result.innerHTML = answer
}
