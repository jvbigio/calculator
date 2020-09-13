const result = document.querySelector('.result')
let num1, num2, operation
const savedNumbers = []

const buttons = document.querySelector('.buttons-container')
buttons.addEventListener('click', getInput)

function getInput (e) {
  const btnPressed = e.target.textContent
  const isNumberOrOperator = e.target

  if (isNumberOrOperator.classList.contains('number')) {
    result.innerHTML = btnPressed
    num1 = parseInt(isNumberOrOperator.textContent)
  } else if (isNumberOrOperator.classList.contains('operation')) {
    console.log('operation button was pressed!!')
    num1 = savedNumbers.push(num1)
    result.innerHTML = num1
    if (isNumberOrOperator.textContent !== '=') {
      operation = isNumberOrOperator.textContent
    }

    if (isNumberOrOperator.textContent === '=') {
      console.log('equal sign pressed')
      num1 = savedNumbers[0] // 1
      num2 = savedNumbers[1] // 2
      calculator(num1, operation, num2)
    }
  }
}

function calculator (num1, operator, num2) {
  const saved = []
  let answer
  if (operator === '*') {
    answer = num1 * num2
  } else if (operator === '/') {
    answer = num1 / num2
  } else if (operator === '+') {
    answer = num1 + num2
    saved.push(answer)
  } else if (operator === '-') {
    answer = num1 - num2
  }
  result.innerHTML = answer // 3
  console.log(answer) // 3!!!! YAY
  console.log(saved) // [3]
  return saved
  // return answer
}
// console.log(calculator(50, '+', 1))
