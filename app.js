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
  } else if (keyPressed.classList.contains('operation')) {
    isFirstKeyPressed = false
    if (keyPressed.textContent !== '=') {
      operation = keyPressed.textContent
    } else if (keyPressed.textContent === '=') {
      calculator(num1, operation, num2)
    }
  }
}

function calculator (num1, operator, num2) {
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
  renderAnswer(computedValue)
}

function renderAnswer (answer) {
  result.innerHTML = answer
}
