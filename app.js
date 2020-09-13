// const operations = document.querySelectorAll('.operation')
const result = document.querySelector('.result')
// operation equal to whatever operation was pressed
let num1, num2, operation
const savedNumbers = []

const buttons = document.querySelector('.buttons-container')
buttons.addEventListener('click', e => {
  // const btnPressed = parseInt(e.target.textContent) // original
  // don't parseInt yet, bc not all keys will be numbers here
  const btnPressed = e.target.textContent
  console.log(btnPressed)
  const isNumberOrOperator = e.target
  console.log(isNumberOrOperator)

  if (isNumberOrOperator.classList.contains('number')) {
    // result.innerHTML += btnPressed // original
    // append result when an operation is pushed, check to see if u update screen with current button pressed or add onto it happens on line below:
    result.innerHTML += num1
    num1 = parseInt(isNumberOrOperator.textContent) // original
    // num1 = isNumberOrOperator.textContent
    console.log(num1)
    result.innerHTML = num1

    // console.log(num2)
    // savedNumbers.push(num1)
    // console.log(savedNumbers)
  } else if (isNumberOrOperator.classList.contains('operation')) {
    console.log('operation button was pressed!!')
    savedNumbers.push(num1)
    result.innerHTML = num1
    // result.innerHTML = ''

    // num2 = (parseInt(isNumberOrOperator.textContent))
    // // console.log(num2)
    // console.log(isNumberOrOperator.textContent)
    // savedNumbers.push(num1)
    console.log(savedNumbers)

    // if '=' sign pressed:
    // try this:
    // calculator(num1, operator, num2)
  }
})

function calculator (num1, operator, num2) {
  const saved = []
  let sum
  if (operator === '*') {
    // return num1 * num2
  } else if (operator === '/') {
    // return num1 / num2
  } else if (operator === '+') {
    // return num1 + num2
    saved.push(num1)
    // console.log(num1)
    saved.push(num2)
    // console.log(num2)
    sum = saved.reduce((a, b) => a + b, 0)
    // console.log(sum)
  } else if (operator === '-') {
    // return num1 - num2
  }
  return sum
}
// console.log(calculator(50, '+', 1))
