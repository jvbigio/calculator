const operations = document.querySelectorAll('.operation')
const result = document.querySelector('.result')

const buttons = document.querySelector('.buttons-container')
buttons.addEventListener('click', e => {
  const savedNumbers = []
  let num1, num2
  const numbers = parseInt(e.target.textContent)
  // console.log(numbers)
  // console.log(parseInt(e.target.textContent))
  result.innerHTML += numbers
  // console.log(numbers)
  const button = e.target
  // console.log(button)
  if (button.classList.contains('number')) {
    num1 = parseInt(button.textContent)
    console.log(num1)
  }
  if (button.classList.contains('operation')) {
    console.log(num1)
    console.log(button.textContent)
    savedNumbers.push(num1)
    console.log(savedNumbers)
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
