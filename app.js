const result = document.querySelector('.result')
const addBtn = document.querySelector('.add').addEventListener('click', add)
const numberKeys = document.querySelectorAll('.number')

numberKeys.forEach(number => {
  number.addEventListener('click', _ => {
    result.innerHTML += number.textContent
  })
})

// numberKeys.addEventListener('keydown', (e) => {
//   // console.log(`Key ${e.key} pressed`)
//   // result.innerHTML = 7 // works
//   result.innerHTML = e.key
// })

// MATH OPERATIONS //
function add (...numbers) {
  return numbers.reduce((previous, current) => {
    // result.innerHTML = (previous + current)
    // return previous + current
    const sum = previous + current
    document.querySelector('.result').innerHTML = sum
  })
}

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
