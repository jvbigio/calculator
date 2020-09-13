// const operations = document.querySelectorAll('.operation')
const result = document.querySelector('.result')
let num1, num2, operation
const savedNumbers = []

const buttons = document.querySelector('.buttons-container')
buttons.addEventListener('click', e => {
  const btnPressed = e.target.textContent // innerText of btn pressed
  const isNumberOrOperator = e.target // ex: <button class="number"</button>

  if (isNumberOrOperator.classList.contains('number')) {
    result.innerHTML += btnPressed // original
    // append result when an operation is pushed, check to see if u update screen with current button pressed or add onto it happens on line below:
    // result.innerHTML += num1
    num1 = parseInt(isNumberOrOperator.textContent) // original
    console.log(num1) // 1st number pressed
    // result.innerHTML = num1 // this is actually 2nd
  } else if (isNumberOrOperator.classList.contains('operation')) {
    console.log('operation button was pressed!!')
    // savedNumbers.push(num1) // original
    num1 = savedNumbers.push(num1) // original
    result.innerHTML = num1
    operation = isNumberOrOperator.textContent
    // console.log(operation) // +
    // savedNumbers.push(num1)
    if (isNumberOrOperator.textContent === '=') {
      console.log('equal sign pressed') // works
      console.log(savedNumbers)
      console.log(operation)
      // console.log(num1, operation, num2)
      // calculator(num1, operation, num2)
    }
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
    console.log(num1)
    saved.push(num2)
    console.log(num2)
    // sum = saved.reduce((a, b) => a + b, 0)
    sum = saved.reduce((num1, num2) => num1 + num2, 0)
    // console.log(sum)
  } else if (operator === '-') {
    // return num1 - num2
  }
  return sum
}
// console.log(calculator)
// console.log(calculator(50, '+', 1))
