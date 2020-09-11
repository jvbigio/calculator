document.addEventListener('DOMContentLoaded', function () {
  runCalculator()
})

const result = document.querySelector('.result')
const numberKeys = document.querySelectorAll('.number')
numberKeys.forEach(numKeys => {
  numKeys.addEventListener('click', e => {
    // console.log(typeof e.target.textContent) // string
    // console.log(parseInt(e.target.textContent)) // number
    // renders numbers on calculator display screen:
    // result.innerHTML += numKeys.textContent
  })
})

// refactored from above
// numberKeys.forEach(numKeys => {
//   numKeys.addEventListener('click', calculator)
// })
// document.querySelector('.add').addEventListener('click', add)
// const operationsArray = [].slice.call(document.querySelectorAll('.operation'))
const operations = document.querySelectorAll('.operation')

operations.forEach(operator => operator.addEventListener('click', e => {
  // console.log(operator.textContent) // +, -, *, / (strings)
  if (operator.textContent === '=') {
    console.log('clicked')
    // calculator()
  }
}))

// const mathOperators = ['+', '-', '*', '/', '=']

// MATH OPERATIONS //
/*
pseudo code:
1) capture first number and save it to a variable
2) check if there's an operator currently in place
3) capture second number and save it to a variable
4) equal performs the computation between first and second number
*/

// list for number key presses and display on calculator
// numberKeys.forEach(number => {
//   number.addEventListener('click', _ => {
//     result.innerHTML += number.textContent
//   })
// })

function runCalculator () {
  operations.forEach(operator => operator.addEventListener('click', e => {
    if (operator.textContent === '=') {
      calculator()
    }
  }))
}

function calculator (num1, operator, num2) {
  // const firstNum = num1
  // const secondNum = num2
  // const answer = [num1, num2]
  operations.forEach(operator => operator.addEventListener('click', e => {
    // console.log(operator.textContent) // +, -, *, / (strings)
    if (operator.textContent === '=' && operator === '*') {
      console.log('clicked') // works
  //   }
  // }))
  // console.log(firstNum, secondNum) // works
  // console.log(typeof firstNum, typeof secondNum) // number

  if (operator === '*') {
    // return num1 * num2
    result.innerHTML = num1 * num2
  } else if (operator === '/') {
    // return num1 / num2
    result.innerHTML = num1 / num2
  } else if (operator === '+') {
    // return num1 + num2
    result.innerHTML = num1 + num2
  } else if (operator === '-') {
    // return num1 - num2
    result.innerHTML = num1 - num2
  }
  // return firstNum + secondNum
  // console.log(typeof answer) // number
  // return answer
  // result.innerHTML = firstNum + secondNum
}

console.log(calculator(5, '*', 5))
console.log(calculator(5, '/', 5))
console.log(calculator(5, '+', 5))
console.log(calculator(5, '-', 5))

// listen for math operator click
// operations.forEach(operator => {
//   return operator.addEventListener('click', e => {
//     if (e.target.innerHTML === '+') {
//       // Cannot get keyCode to work:
//       // if (e.keyCode === 187) {
//       // console.log('clicked')
//       add()
//     } else if (e.target.innerHTML === '-') {
//       subtract()
//     } else if (e.target.innerHTML === '/') {
//       divide()
//     } else if (e.target.innerHTML === '*') {
//       multiply()
//     }
//   })
// })

// numberKeys.forEach(number => console.log(number.innerHTML))

// function add (...numbers) {
//   return numbers.reduce((previous, current) => {
//     const sum = parseInt(previous) + parseInt(current)
//     // display sum to calc screen
//     document.querySelector('.result').innerHTML = sum
//     return sum
//   }, 0)
// }

// console.log(add(5, 5))

// function add () {
// const num1 = NumOne()
// const num2 = NumTwo()

// const sum = parseInt(num1) + parseInt(num2)
// result.innerHTML += sum
// }

// function NumOne () {
//   document.in
// }

// function NumTwo () {
//   return innerHTML.value
// }

// console.log(add(1, 2, 3))

// function subtract () {
//   // Add code
// }

// function multiply () {
//   // add code
// }

// function divide () {
//   // add code
// }

// // Memory Keys //
// function deleteAll () {
//   // add code
// }

// function memoryClear () {
//   // add code
// }

// function memoryRecall () {
//   // add code
// }

// function memorySave () {
//   // add code
// }

/*
NOTES:

Add functionality for sqr root, +/-, and percentage for future project
*/

// function test (e) {
//   if (e.key === 'Enter') {
//     console.log('= clicked')
//   }
// }

// test()

/// KEYBOARD PRESS FUNCTIONALITY ///
// keydown works for keyboard presses, not browser button clicks
// operations.forEach(operator => operator.addEventListener('keydown', event => {
//   // console.log(operator)
//   console.log(event.code) // works for keydown
//   console.log(event.key) // works for keydown
//   // if (event.code === '=') {
//   //   console.log('clicked')
//   // }
// }))

/// END //
