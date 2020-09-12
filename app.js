const operations = document.querySelectorAll('.operation')
const result = document.querySelector('.result')

/*
MAYBE DELETE numKeys eventListener and move everything into buttons eventListener?

Then check if the className is a number or math operator.
If number, capture and push into array AFTER an operator is pushed?
*/

const numberKeys = document.querySelectorAll('.number')
numberKeys.forEach(numKeys => {
  numKeys.addEventListener('click', e => {
    const savedNumbers = []
    let num1, num2
    const numbers = parseInt(e.target.textContent)
    // console.log(numbers)
    // console.log(parseInt(e.target.textContent))
    result.innerHTML += numbers
    // console.log(numbers)
  })
})
const buttons = document.querySelector('.buttons-container')
buttons.addEventListener('click', e => {
  const button = e.target
  // console.log(button)
})

function calculator (num1, operator, num2) {
  const result = []
  if (operator === '*') {
    // return num1 * num2
  } else if (operator === '/') {
    // return num1 / num2
  } else if (operator === '+') {
    // return num1 + num2
    result.push(num1)
    console.log(num1)
    result.push(num2)
    console.log(num2)
    const sum = result.reduce((a, b) => a + b, 0)
    console.log(sum)
  } else if (operator === '-') {
    // return num1 - num2
  }
}
console.log(calculator(50, '+', 1))
