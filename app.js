// const operations = document.querySelectorAll('.operation')
const result = document.querySelector('.result')
let num1, num2, operation
const inputedNumbers = []

const buttons = document.querySelector('.buttons-container')
buttons.addEventListener('click', getInput)

function getInput (e) {
  // const btnPressed = e.target.textContent // innerText of btn pressed
  const btnPressed = e.target.innerHTML // innerText of btn pressed
  // try +=
  // let btnPressed += e.target.innerHTML
  const isNumberOrOperator = e.target // ex: <button class="number"</button>
  console.log(btnPressed)
  if (isNumberOrOperator.classList.contains('number')) {
    // result.innerHTML = btnPressed // original
    // result.innerHTML += e.target.textContent
    // append result when an operation is pushed, check to see if u update screen with current button pressed or add onto it happens on line below:
    // result.innerHTML += num1
    // num1 = parseInt(isNumberOrOperator.textContent) // original
    // num1 = isNumberOrOperator.textContent // try parsing later
    // console.log(num1) // 1st number pressed
    // result.innerHTML = num1 // this is actually 2nd
  } else if (isNumberOrOperator.classList.contains('operation')) {
    console.log('operation button was pressed!!')
    // inputedNumbers.push(num1) // original
    // num1 = inputedNumbers.push(num1) // original
    num1 = inputedNumbers.push(...num1)
    console.log(num1)
    result.innerHTML = num1
    if (isNumberOrOperator.textContent !== '=') {
      operation = isNumberOrOperator.textContent
    }
    // console.log(operation) // +
    // inputedNumbers.push(num1)
    if (isNumberOrOperator.textContent === '=') {
      console.log('equal sign pressed') // works
      num1 = inputedNumbers[0] // 1
      num2 = inputedNumbers[1] // 2
      console.log(num1)
      console.log(num2)

      calculator(num1, operation, num2)
    }
  }
}

function getFirstNumber () {
  return document.getElementsByClassName('number').value
}

function calculator (num1, operator, num2) {
  console.log(num1)
  console.log(operator)
  console.log(num2)
  let saved = []
  let answer
  if (operator === '*') {
    answer = num1 * num2
    // return answer
  } else if (operator === '/') {
    answer = num1 / num2
    // return answer
  } else if (operator === '+') {
    answer = num1 + num2
    // return answer
    saved.push(answer)
    // saved.push(num1)
    // console.log(num1)
    // saved.push(num2)
    // console.log(num2)
    // sum = saved.reduce((a, b) => a + b, 0)
    // answer = saved.reduce((num1, num2) => num1 + num2, 0)
    // console.log(sum)
    renderAnswer(saved)
    console.log(saved)
    console.log(answer)
  } else if (operator === '-') {
    answer = num1 - num2
    saved.push(answer)
    // console.log(saved)
    // console.log(answer)
    // return answer
  }
  saved = []
  answer = 0
  // result.innerHTML = answer // 3
  console.log(answer) // 3!!!! YAY
  console.log(saved) // [3]
  // return saved
  // return answer
}

function renderAnswer (savedAnswer) {
  console.log(savedAnswer)
  result.innerHTML = savedAnswer
}
