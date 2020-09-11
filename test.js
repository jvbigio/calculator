document.addEventListener('DOMContentLoaded', function () {
  // runCalculator()
  // calculator()
})

let result = document.querySelector('.result')
const numberKeys = document.querySelectorAll('.number')
numberKeys.forEach(numKeys => {
  numKeys.addEventListener('click', e => {
    // console.log(typeof e.target.textContent) // string
    // console.log(parseInt(e.target.textContent)) // number
    // renders numbers on calculator display screen:
    result.innerHTML = numKeys.textContent
  })
})
const buttons = document.querySelector('.buttons-container')
buttons.addEventListener('click', e => {
  const button = e.target
  console.log(button)
 
})

// console.log(mathOperations)

// numberKeys.forEach(numKeys => {
//   numKeys.addEventListener('click', e => {
//     // console.log(typeof e.target.textContent) // string
//     // console.log(parseInt(e.target.textContent)) // number
//     // renders numbers on calculator display screen:
//     result.innerHTML += numKeys.textContent
//   })
// })

// operations.forEach(operator => operator.addEventListener('click', e => {
//   if (operator.textContent === '=') {
//     console.log('clicked')
//     // calculator()
//   }
// }))

// MATH OPERATIONS //
/*
pseudo code:
1) capture first number and save it to a variable
2) check if there's an operator currently in place
3) capture second number and save it to a variable
4) equal performs the computation between first and second number
*/

// function runCalculator () {
//   operations.forEach(operator => operator.addEventListener('click', e => {
//     if (operator.textContent === '=') {
//       calculator()
//     }
//   }))
// }

// function calculator (num1, operator, num2) {
//   operations.forEach(operator => operator.addEventListener('click', e => {
//     // console.log(operator.textContent)
//     numberKeys.forEach(numKeys => {
//       numKeys.addEventListener('click', e => {
//         result.innerHTML += numKeys.textContent
//         console.log(operator.textContent)
//       })
//     })
//   }))
// }
// // console.log(calculator(5, '*', 5))
// console.log(calculator(5, '/', 5))
// console.log(calculator(5, '+', 5))
// console.log(calculator(5, '-', 5)

function runCalculator (num1, operator, num2) {
  if (operator === '*') {
    return parseInt(num1) * parseInt(num2)
  } else if (operator === '/') {
    return parseInt(num1) / parseInt(num2)
  } else if (operator === '+') {
    return parseInt(num1) + parseInt(num2)
  } else if (operator === '-') {
    return parseInt(num1) - parseInt(num2)
  }
}
