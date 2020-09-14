const result = document.querySelector('.result')
let num1, num2, operation
let isFirstKeyPressed = true
const buttons = document.querySelector('.buttons-container')
buttons.addEventListener('click', getInput)

function getInput (e) {
  const keyPressed = e.target
  if (keyPressed.classList.contains('number')) {
    if (isFirstKeyPressed) {
      const number = e.target.textContent
      num1 = e.target.textContent * 10
      num1 = parseFloat(num1) + parseFloat(number)
      result.innerHTML += number
    } else {
      result.innerHTML = ''
      const number = e.target.textContent
      num2 = e.target.textContent * 10 // original
      num2 = parseFloat(num2) + parseFloat(number)
      result.innerHTML = number
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
