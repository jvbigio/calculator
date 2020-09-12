// MATH OPERATIONS //
/*
pseudo code:
1) capture first number and save it to a variable
2) check if there's an operator currently in place
3) capture second number and save it to a variable
4) equal performs the computation between first and second number
*/

document.addEventListener('DOMContentLoaded', function () {
  runCalculator()
})

const operations = document.querySelectorAll('.operation')
const result = document.querySelector('.result')
const numberKeys = document.querySelectorAll('.number')
numberKeys.forEach(numKeys => {
  numKeys.addEventListener('click', e => {
    // console.log(typeof e.target.textContent) // string
    // console.log(parseInt(e.target.textContent)) // number
    // renders numbers on calculator display screen:
    result.innerHTML += numKeys.textContent
  })
})
const buttons = document.querySelector('.buttons-container')
buttons.addEventListener('click', e => {
  const button = e.target
  // console.log(button)
})

// operations.forEach(operator => operator.addEventListener('click', e => {
//   if (operator.textContent === '=') {
//     console.log('clicked')
//     // calculator()
//   }
// }))

// run only if = sign pressed
function runCalculator () {
  operations.forEach(operator => operator.addEventListener('click', e => {
    if (operator.textContent === '=') {
      calculate()
    }
  }))
}

function calculate (num1, operator, num2) {
  if (operator === '*') {
    // console.log(num1, num2) // strings '5', '2'
    return parseInt(num1) * parseInt(num2)
  } else if (operator === '/') {
    return parseInt(num1) / parseInt(num2)
  } else if (operator === '+') {
    return parseInt(num1) + parseInt(num2)
  } else if (operator === '-') {
    return parseInt(num1) - parseInt(num2)
  }
}
// console.log(runCalculator(5, '*', 2)) // 10
