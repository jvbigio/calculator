const result = document.querySelector('.result')
const numberKeys = document.querySelectorAll('.number')
document.querySelector('.add').addEventListener('click', add)
// const operationsArray = [].slice.call(document.querySelectorAll('.operation'))
const operations = document.querySelectorAll('.operation')
const mathOperators = ['+', '-', '*', '/']

// listen for math operator click
function calculate (mathOperator) {
  operations.forEach(operator => {
    return operator.addEventListener('click', e => {
      // if (e.target.innerHTML === '+') {
      if (e.key === '+') {
        console.log('clicked')
        // Cannot get keyCode to work:
        // if (e.keyCode === 187) {
        // console.log('clicked')
        // add()
      } else if (e.target.innerHTML === '-') {
        subtract()
      } else if (e.target.innerHTML === '/') {
        divide()
      } else if (e.target.innerHTML === '*') {
        multiply()
      }
    })
  })
}
calculate()

// numberKeys.forEach(number => console.log(number.innerHTML))

// list for number key presses and display on calculator
numberKeys.forEach(number => {
  number.addEventListener('click', _ => {
    result.innerHTML += number.textContent
  })
})

// MATH OPERATIONS //
/*
pseudo code:
1) capture first number and save it to a variable
2) check if there's an operator currently in place
3) capture second number and save it to a variable
4) equal performs the computation between first and second number
*/
// function add (...numbers) {
//   return numbers.reduce((previous, current) => {
//     const sum = parseInt(previous) + parseInt(current)
//     // display sum to calc screen
//     document.querySelector('.result').innerHTML = sum
//     return sum
//   }, 0)
// }

// console.log(add(5, 5))

function add () {
  const num1 = NumOne()
  const num2 = NumTwo()

  const sum = parseInt(num1) + parseInt(num2)
  result.innerHTML += sum
}

function NumOne () {}

function NumTwo () {}

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
