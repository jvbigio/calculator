// const operations = document.querySelectorAll('.operation')
const result = document.querySelector('.result')
let num1, num2, operation
const savedNumbers = []

const buttons = document.querySelector('.buttons-container')
buttons.addEventListener('click', e => {
  const numbers = parseInt(e.target.textContent) // original
  // const numbers = e.target.textContent

  const button = e.target
  if (button.classList.contains('number')) {
    result.innerHTML += numbers
    num1 = parseInt(button.textContent) // original
    // num1 = button.textContent
    console.log(num1)
    result.innerHTML = num1

    // console.log(num2)
    // savedNumbers.push(num1)
    // console.log(savedNumbers)
  } else if (button.classList.contains('operation')) {
    console.log('operation button was pressed!!')
    savedNumbers.push(num1)
    result.innerHTML = num1
    // result.innerHTML = ''


    // num2 = (parseInt(button.textContent))
    // // console.log(num2)
    // console.log(button.textContent)
    // savedNumbers.push(num1)
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
