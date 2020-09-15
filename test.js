const result = document.querySelector('.result')
let num1, num2, operation
let isFirstKeyPressed = true
const savedNumbers = []
const buttons = document.querySelector('.buttons-container')
buttons.addEventListener('click', getInput)
// [1,2,3,4,5].reduce((acc, current)=>acc+current, 0)

// try 45 + 37 => num1:55, operator: +, num2: 77

function getInput (e) {
  const keyPressed = e.target
  const numberTracker = result.innerHTML
  console.log(numberTracker)

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
      console.log(keyPressed.innerHTML) // 2
      result.innerHTML = numberTracker[1]
    }
  } else if (keyPressed.classList.contains('operation')) {
    isFirstKeyPressed = false
    if (keyPressed.textContent !== '=') {
      operation = keyPressed.textContent
    } else if (keyPressed.textContent === '=') {
      console.log(num1, operation, num2)
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
